const {createCheckResult} = require("./check_result-structure");
const { randomInteger } = require("../../share/utils");

const fillRandomFields = () => ({
    cnt: randomInteger(1, 100), 
});


const baseList = [{rc:0, desc:'Success',}, {rc:1, desc:'Error',}, {rc:-1, desc:'Warning',}]
const checkResultList = baseList.map((x, i) => ({
    ...x, ...fillRandomFields()
}));

let CHECK_RESULT = checkResultList.map(x => createCheckResult(x));

module.exports = {
    CHECK_RESULT
};