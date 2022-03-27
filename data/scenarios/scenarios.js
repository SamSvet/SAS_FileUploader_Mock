const {createScenario} = require("./scenarios-structure");
const {CAMPAIGN_STATUSES} = require("../refbooks/campaign-statuses");
const {MODEL_NAMES} = require("../refbooks/model-names");
const {SEGMENTS} = require("../refbooks/segments");
const {PRODUCTS} = require("../refbooks/products");
const {CHANNELS} = require("../refbooks/channels");
const {UPLOADING_TYPES} = require("../refbooks/uploading-types");
const {getRandomItem} = require("../../share/get-random-items-from-array");
const {randomString, randomDate, randomInteger, range} = require("../../share/utils");
const { CAMPAIGNS } = require("../campaigns/campaign-list");
const { ACTIVITY_TYPES } = require("../refbooks/activity-types");

const list_products = PRODUCTS
const list_channels = CHANNELS
const list_uploading_types = UPLOADING_TYPES
const list_segments = SEGMENTS
const list_campaign_statuses = CAMPAIGN_STATUSES
const list_model_names = MODEL_NAMES
const list_activity_type_cd = ACTIVITY_TYPES;

const fillRandomFields = () => ({
    scenario_name: randomString(10),
    product_id: getRandomItem(list_products).internal_code,
    channel_cd: [getRandomItem(list_channels).internal_code],
    sas_camp_code: randomString(5),
    start_scenario_dt: randomDate(),
    end_scenario_dt: randomDate(),
    plan_conversion: randomInteger(0,100),
    fact_conversion: randomInteger(0,100),
    uploading_type: getRandomItem(list_uploading_types).internal_code,
    segment: getRandomItem(list_segments).internal_code,
    last_launch_sc_dt: randomDate(),
    upload_in_channel_dt: randomDate(),
    scenario_status: getRandomItem(list_campaign_statuses).internal_code,
    model_flg: Boolean(randomInteger(0, 1)),
    model_name: getRandomItem(list_model_names).internal_code,
    created_by: "Ricky Gervais",
    created: randomDate(),
    updated_by: "George Carlin",
    updated: randomDate(),
    status_updated: randomDate(),
    activity_type_cd: getRandomItem(list_activity_type_cd).internal_code,
})

const scenarios = CAMPAIGNS.flatMap(camp => (
  [...range(1,2)].map( () => ({...fillRandomFields(), campaign_id: camp.campaign_id}) )
  ))

let SCENARIOS = scenarios.map(x => createScenario(x))

module.exports = {
    SCENARIOS
};