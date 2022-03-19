

const {createCampaign} = require("./campaign-structure");
const {getRandomItem} = require("../../share/get-random-items-from-array");
const { randomDate, randomInteger } = require("../../share/utils");
const { ACTIVITY_GROUPS } = require("../refbooks/activity-groups");
const { CAMPAIGN_KINDS } = require("../refbooks/campaign-kinds");
const { CAMPAIGN_MANAGERS } = require("../refbooks/campaign-managers");
const { TAGS } = require("../tags/tags");
const { CAMPAIGN_STATUSES } = require("../refbooks/campaign-statuses");

const list_activity_group_cd = ACTIVITY_GROUPS;
const list_campaing_manager = CAMPAIGN_MANAGERS;
const list_tags = TAGS;
const list_campaing_kind = CAMPAIGN_KINDS;
const list_campaign_status = CAMPAIGN_STATUSES;
const list_desc = new Array(10).fill(0).map((x, i) => `Описание ${i + 1}`);

const fillRandomFields = () => ({
    campaign_kind: getRandomItem(list_campaing_kind).internal_code,
    campaign_version: randomInteger(0, 10),
    activity_group_cd: getRandomItem(list_activity_group_cd).internal_code,
    campaign_manager: getRandomItem(list_campaing_manager).internal_code,
    tags: [getRandomItem(list_tags).id],
    description: getRandomItem(list_desc),
    campaign_status: getRandomItem(list_campaign_status).internal_code,
    created: randomDate(),

    status_updated: randomDate(),
    updated: randomDate(),
});

const campaigns = new Array(25).fill(0).map((x, i) => ({
    campaign_name: `Кампания #${i + 1}`,
...fillRandomFields()
}));

campaigns.unshift({
    campaign_id: "locked_campaign",
    campaign_name: "Заблокированная кампания",
    ...fillRandomFields()
});
campaigns.unshift({
    campaign_id: "my_campaign",
    campaign_name: "Моя кампания",
    ...fillRandomFields()
});

let CAMPAIGNS = campaigns.map(x => createCampaign(x));

module.exports = {
    CAMPAIGNS
};