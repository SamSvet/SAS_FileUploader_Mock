

const {v4} = require("uuid");
const {sanitize} = require('../../share/sanitize');
const {currentDate} = require('../../share/utils');

const defaultABTestsData = () => ({
    ab_test_id: v4(),
    scenario_id: null,
    tmp_scenario_id: null,

    test_hypothesis: null,
    fact_start_dt: null, //date
    result_dt: null, //date
    df_validate_flg: null, //boolean

    created_by: null,
    created: currentDate(), //date
    updated_by: null,
    updated:  null, //date
});

// const defaultABTests = () => {
//     delete defaultABTestsData.tmp_scenario_id;
//     return defaultABTestsData;
// };

const createABTest = ({
                        ab_test_id,
                        scenario_id,
                        ab_flg,
                        test_hypothesis,
                        fact_start_dt,
                        result_dt,
                        df_validate_flg,
                        created_by,
                        created,
                        updated_by,
                        updated,
                        }) => ({
    ...defaultABTestsData(),
    ...sanitize({
        ab_test_id,
        scenario_id,
        ab_flg,
        test_hypothesis,
        fact_start_dt,
        result_dt,
        df_validate_flg,
        created_by,
        created,
        updated_by,
        updated,
    })
});

module.exports = {
    createABTest
};