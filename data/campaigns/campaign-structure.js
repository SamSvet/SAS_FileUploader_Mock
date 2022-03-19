

const {v4} = require("uuid");
const {sanitize} = require('../../share/sanitize');
const {CAMPAIGN_STATUS} = require('../../share/constants');
const {currentDate} = require('../../share/utils');

const defaultCampaign = () => ({
    campaign_id: v4(),
    campaign_version: null,
    campaign_name: null,
    campaign_kind: null,
    campaign_status: null,
    activity_group_cd: null,
    campaign_manager: null,
    tags: null,
    description: null,
    created: currentDate(),
    created_by : null,
    updated: null,
    updated_by : null,
    close_reason: null,
    agreement_note: null,
    status_updated: null,
    base_campaign_id: null,
    team_id: null,
});

const createCampaign = ({
                            campaign_id,
                            campaign_version,
                            campaign_name,
                            campaign_kind,
                            campaign_status,
                            activity_group_cd,
                            campaign_manager,
                            tags,
                            description,
                            created,
                            updated,
                            status_updated,
                            base_campaign_id,
                            team_id,
                        }) => ({
    ...defaultCampaign(),
    ...sanitize({
        campaign_id,
        campaign_version,
        campaign_name,
        campaign_kind,
        campaign_status,
        activity_group_cd,
        campaign_manager,
        tags,
        description,
        created,
        updated,
        status_updated,
        base_campaign_id,
        team_id,
    })
});

module.exports = {
    CAMPAIGN_STATUS,
    defaultCampaign,
    createCampaign
};