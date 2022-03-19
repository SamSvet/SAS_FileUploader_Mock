const {createABTest} = require("./ab_tests-structure");
const {randomDate, randomString, randomInteger, range} = require("../../share/utils");
const {SCENARIOS} = require("../scenarios/scenarios");

const fillRandomFields = () => ({
    test_hypothesis: randomString(30),
    fact_start_dt: randomDate(),
    result_dt: randomDate(),
    df_validate_flg: Boolean(randomInteger(0, 1)),
    created_by: "Ricky Gervais",
    created: randomDate(),
    updated_by: "George Carlin",
    updated: randomDate(),
})

// const scenarios = SCENARIOS.flatMap(scenario => (
//   [...range(1,2)].map( () => ({...fillRandomFields(), scenario_id: scenario.scenario_id, createABTest() {
//           return undefined;
//       }
//   }) )
// ))
const ab_tests = SCENARIOS.flatMap(scenario => (
  [...range(1,2)].map( () => ({...fillRandomFields(), scenario_id: scenario.scenario_id}) )
))

let AB_TESTS = ab_tests.map(x => createABTest(x));
module.exports = {
    AB_TESTS
};