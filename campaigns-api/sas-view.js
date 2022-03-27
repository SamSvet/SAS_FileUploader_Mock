const { CAMPAIGN_STATUSES } = require("../data/refbooks/campaign-statuses");
const { UPLOADING_TYPES } = require("../data/refbooks/uploading-types");
const { MODEL_NAMES } = require("../data/refbooks/model-names");
const { CHANNELS } = require("../data/refbooks/channels");
const { PRODUCTS } = require("../data/refbooks/products");
const { TAGS } = require("../data/tags/tags");
const { CAMPAIGN_MANAGERS } = require("../data/refbooks/campaign-managers");
const { CAMPAIGN_KINDS } = require("../data/refbooks/campaign-kinds");
const { ACTIVITY_TYPES } = require("../data/refbooks/activity-types");
const { ACTIVITY_GROUPS } = require("../data/refbooks/activity-groups");
const { REF_CODES } = require("../share/constants");
const { AB_TESTS } = require("../data/ab_tests/ab_tests");
const { CAMPAIGNS } = require("../data/campaigns/campaign-list");
const { SCENARIOS } = require("../data/scenarios/scenarios");
const { getErrorModal, ERROR_CODES, SCREENS } = require("../share/constants");
const {
  createErrorResponse,
  createResponse,
  DELTA_ACTION,
} = require("../share/response");
const { SEGMENTS } = require("../data/refbooks/segments");

const campaignViewResponse = (id, params) => {
  const { campaign_id, screen_data, filter_data } = params;
  const campaign = CAMPAIGNS.find((x) => x.campaign_id === campaign_id);

  if (!campaign) {
    const { code, modal, message } = getErrorModal(ERROR_CODES.NOT_FOUND);
    return createErrorResponse(id, code, message, modal);
  }

  const scenarios = SCENARIOS.filter((el) => el.campaign_id === campaign_id);
  const ab_tests = AB_TESTS.filter(
    (ab) => scenarios.findIndex((sc) => sc.scenario_id === ab.scenario_id) >= 0
  );
  const dictionaries = {
    [REF_CODES.ACTIVITY_GROUP]: ACTIVITY_GROUPS.filter((x) =>
      campaign.activity_group_cd?.includes(x.internal_code)
    ),
    [REF_CODES.ACTIVITY_TYPE]: ACTIVITY_TYPES.filter((x) =>
      scenarios
        .map((scenario) => scenario.activity_type_cd)
        .includes(x.internal_code)
    ),
    [REF_CODES.CAMPAIGN_KIND]: CAMPAIGN_KINDS.filter((x) =>
      campaign.campaign_kind?.includes(x.internal_code)
    ),
    [REF_CODES.CAMPAIGN_MANAGER]: CAMPAIGN_MANAGERS.filter((x) =>
      campaign.campaign_manager?.includes(x.internal_code)
    ),
    [REF_CODES.TAGS]: TAGS.filter((x) => campaign.tags?.includes(x.id)),
    [REF_CODES.CAMPAIGN_STATUS]: CAMPAIGN_STATUSES.filter((x) =>
      campaign.campaign_status?.includes(x.internal_code)
    ),
    [REF_CODES.PRODUCT]: PRODUCTS.filter((x) =>
      scenarios.map((scenario) => scenario.product_id).includes(x.internal_code)
    ),
    [REF_CODES.CHANNEL]: CHANNELS.filter((x) =>
      scenarios
        .flatMap((scenario) => scenario.channel_cd)
        .includes(x.internal_code)
    ),
    [REF_CODES.SEGMENT]: SEGMENTS.filter((x) =>
      scenarios.map((scenario) => scenario.segment).includes(x.internal_code)
    ),
    [REF_CODES.UPLOADING_TYPE]: UPLOADING_TYPES.filter((x) =>
      scenarios
        .map((scenario) => scenario.uploading_type)
        .includes(x.internal_code)
    ),
    [REF_CODES.MODEL]: MODEL_NAMES.filter((x) =>
      scenarios.map((scenario) => scenario.model_name).includes(x.internal_code)
    ),
  };

  const data = {
    campaigns: [campaign],
    scenarios,
    ab_tests,
    ...dictionaries,
  };

  const screen = SCREENS.CAMPAIGNS_VIEW;
  const delta_action = DELTA_ACTION.OVERRIDE;

  return createResponse({
    id,
    filter_data,
    screen_data,
    data,
    delta_action,
    screen,
  });
};

const respond = (req, resp) => {
  const { id, params } = req.body;
  const responseBody = campaignViewResponse(id, params);
  resp.json(responseBody);
};

module.exports = {
  respond,
};