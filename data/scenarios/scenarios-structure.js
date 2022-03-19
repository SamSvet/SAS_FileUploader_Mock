

const {v4} = require("uuid");
const {sanitize} = require('../../share/sanitize');
const {currentDate} = require('../../share/utils');

const defaultScenarioData = () => ({
  campaign_id: null,
  scenario_id: v4(),
  tmp_scenario_id: null,

  product_id: null,
  channel_cd: null,
  start_scenario_dt: null, //date
  end_scenario_dt: null, //date
  plan_conversion: null,
  uploading_type: null,
  segment: null,
  model_flg: null, //boolean
  model_name: null,

  created_by : null,
  created : currentDate(), //date
  updated_by : null,
  updated : null, //date
  status_updated :null, //date

  last_launch_sc_dt: null, //date
  upload_in_channel_dt: null, //date
  scenario_status: null, //какие статусы бывают?
  sas_camp_code: null,
  scenario_name: null,
  fact_conversion: null,
  activity_type_cd: null,
});

// const defaultScenario = () => {
//   delete defaultScenarioData.tmp_scenario_id;
//   return defaultScenarioData;
// }


const createScenario = ({
                          campaign_id,
                          scenario_id,
                          scenario_name,
                          product_id,
                          channel_cd,
                          sas_camp_code,
                          start_scenario_dt,
                          end_scenario_dt,
                          plan_conversion,
                          fact_conversion,
                          uploading_type,
                          segment,
                          last_launch_sc_dt,
                          upload_in_channel_dt,
                          scenario_status,
                          model_flg,
                          model_name,
                          created_by,
                          created,
                          updated_by,
                          updated,
                          status_updated,
                          activity_type_cd,
                        }) => ({
  ...defaultScenarioData(),
  ...sanitize({
    campaign_id,
    scenario_id,
    scenario_name,
    product_id,
    channel_cd,
    sas_camp_code,
    start_scenario_dt,
    end_scenario_dt,
    plan_conversion,
    fact_conversion,
    uploading_type,
    segment,
    last_launch_sc_dt,
    upload_in_channel_dt,
    scenario_status,
    model_flg,
    model_name,
    created_by,
    created,
    updated_by,
    updated,
    status_updated,
    activity_type_cd
  })
});

module.exports = {
  createScenario
};