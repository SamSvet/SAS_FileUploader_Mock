

const { SCENARIOS } = require("../scenarios/scenarios");
const { REF_CODES } = require("../../share/constants");
const { ACTIVITY_TYPES } = require("../refbooks/activity-types");
const { TAGS } = require("../tags/tags");
const { CAMPAIGN_KINDS } = require("../refbooks/campaign-kinds");
const { CAMPAIGN_MANAGERS } = require("../refbooks/campaign-managers");
const { CAMPAIGN_STATUSES } = require("../refbooks/campaign-statuses");
const { PRODUCTS } = require("../refbooks/products");
const { SEGMENTS } = require("../refbooks/segments");
const { UPLOADING_TYPES } = require("../refbooks/uploading-types");
const { parseDate } = require("../../share/date-utils");

const checkValue = (value, filter) => !filter || value == filter;

const checkSubstr = (value, filter) => !filter || value.includes(filter);

const checkRefArrayValue = (entity, filters, field) => {
  return (
    !filters[field] ||
    Boolean(
      (Array.isArray(entity[field]) ? entity[field] : [entity[field]])?.filter(
        (x) => filters[field] == x
      ).length
    )
  );
};

const checkDateValue = (date, filterDate) => {
  return !filterDate || date == filterDate;
};

const filterCampaigns = (campaigns, filters) => {
  if (!filters) return campaigns;
  const res = campaigns.filter((campaign) => {
    const campaignOk =
      checkSubstr(campaign.campaign_name, filters.campaign_name) &&
      [
        "activity_type_cd",
        "campaign_kind",
        "tags",
        "campaign_manager",
        "campaign_status",
      ].every((field) => checkRefArrayValue(campaign, filters, field)) &&
      checkDateValue(campaign.created, filters.created);

    if (!campaignOk) return false;

    const scenariosOk = SCENARIOS.filter(
      (x) => x.campaign_id == campaign.campaign_id
    ).every((scenario) => {
      return (
        checkValue(scenario.scenario_id, filters.scenario_id) &&
        ["start_scenario_dt", "end_scenario_dt", "status_updated"].every(
          (field) => checkDateValue(scenario[field], filters[field])
        ) &&
        ["product_id", "uploading_type", "segment"].every((field) =>
          checkRefArrayValue(scenario, filters, field)
        )
      );
    });

    return scenariosOk;
  });
  return res;
};

const sortCampaigns = (campaigns, sortStr) => {
  if (!sortStr) return campaigns;
  const isDesc = sortStr[0] === "-";
  const sortField = isDesc ? sortStr.slice(1) : sortStr;
  return campaigns.sort((a, b) => {
    const left = Array.isArray(a[sortField])
      ? a[sortField].sort()[0]
      : a[sortField];
    const right = Array.isArray(b[sortField])
      ? b[sortField].sort()[0]
      : b[sortField];
    const condition = isDesc ? left < right : left > right;
    return condition ? 1 : -1;
  });
};

const getCampaignsListDict = (campaigns, filters) => {
  const dictMap = new Map([
    // [
    //   REF_CODES.ACTIVITY_TYPE,
    //   {
    //     codes: new Set([
    //       ...campaigns.map((x) => x.activity_type_cd).flat(),
    //       ...(filters?.activity_type_cd || []),
    //     ]),
    //     dict: ACTIVITY_TYPES,
    //   },
    // ],
    [
      REF_CODES.CAMPAIGN_KIND,
      {
        codes: new Set([
          ...campaigns.map((x) => x.campaign_kind).flat(),
          ...(filters?.campaign_kind || []),
        ]),
        dict: CAMPAIGN_KINDS,
      },
    ],
    [
      REF_CODES.CAMPAIGN_MANAGER,
      {
        codes: new Set([
          ...campaigns.map((x) => x.campaign_manager).flat(),
          ...(filters?.campaign_manager || []),
        ]),
        dict: CAMPAIGN_MANAGERS,
      },
    ],
    [
      REF_CODES.CAMPAIGN_STATUS,
      {
        codes: new Set([
          ...campaigns.map((x) => x.campaign_status).flat(),
          ...(filters?.campaign_status || []),
        ]),
        dict: CAMPAIGN_STATUSES,
      },
    ],
    [
      REF_CODES.PRODUCT,
      {
        codes: new Set([
          ...campaigns
            .map((c) =>
              SCENARIOS.filter((s) => s.campaign_id == c.campaign_id)
                .map((s) => s.product_id)
                .flat()
            )
            .flat(),
          ...(filters?.product_id || []),
        ]),
        dict: PRODUCTS,
      },
    ],
    [
      REF_CODES.SEGMENT,
      {
        codes: new Set([
          ...campaigns
            .map((c) =>
              SCENARIOS.filter((s) => s.campaign_id == c.campaign_id)
                .map((s) => s.segment)
                .flat()
            )
            .flat(),
          ...(filters?.segment || []),
        ]),
        dict: SEGMENTS,
      },
    ],
    [
      REF_CODES.UPLOADING_TYPE,
      {
        codes: new Set([
          ...campaigns
            .map((c) =>
              SCENARIOS.filter((s) => s.campaign_id == c.campaign_id)
                .map((s) => s.uploading_type)
                .flat()
            )
            .flat(),
          ...(filters?.uploading_type || []),
        ]),
        dict: UPLOADING_TYPES,
      },
    ],
    [
      'tags',
      {
        codes: new Set([
          ...campaigns.map((x) => x.tags).flat(),
          ...(filters?.tags || []),
        ]),
        dict: TAGS,
      },
    ],
  ]);

  const dictionaries = {};
  const dictMapIter = dictMap.keys();
  let dictMapKey = dictMapIter.next();
  while (!dictMapKey.done) {
    const dictKey = dictMapKey.value;
    const { codes, dict } = dictMap.get(dictKey);
    dictionaries[dictKey] = dict.filter((x) => codes.has(x.internal_code));
    dictMapKey = dictMapIter.next();
  }
  dictionaries.tags = TAGS.filter((tag) =>
    new Set([
      ...campaigns.map((x) => x.tags).flat(),
      ...(filters?.tags || []),
    ]).has(tag.name)
  );

  return dictionaries;
};

const validateCampaign = (campaign) => {
  const badParams = {};
  let isOk = true;
  if (!campaign.campaign_name) {
    badParams.campaign_name = ["Обязательное поле"];
    isOk = false;
  }

  if (!campaign.activity_group_cd) {
    badParams.activity_group_cd = ["Обязательное поле"];
    isOk = false;
  }

  if (!campaign.campaign_manager) {
    badParams.campaign_manager = ["Обязательное поле"];
    isOk = false;
  }

  if (!campaign.campaign_kind) {
    badParams.campaign_kind = ["Обязательное поле"];
    isOk = false;
  }

  if (!campaign.description) {
    badParams.description = ["Обязательное поле"];
    isOk = false;
  }

  return isOk ? null : badParams;
};

const validateScenario = (scenario) => {
  // TODO
  return null;
};

const validateAbTest = (abTest) => {
  // TODO
  return null;
};

module.exports = {
  filterCampaigns,
  sortCampaigns,
  getCampaignsListDict,
  validateCampaign,
  validateScenario,
  validateAbTest,
};