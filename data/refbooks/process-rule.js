const {createRefbookItem} = require("./refbook-item-structure");

const process_rule = [
    {
        process_cd: 'sashelp_shoes',
        rule_num: 1,
        isfixed: 1,
    },
    {
        process_cd: 'sashelp_shoes',
        rule_num: 2,
        isfixed: 1,
    },
    {
        process_cd: 'sashelp_shoes',
        rule_num: 3,
        isfixed: 0,
    },
    {
        process_cd: 'sashelp_shoes',
        rule_num: 4,
        isfixed: 0,
    },
    {
        process_cd: 'sashelp_class',
        rule_num: 5,
        isfixed: 1,
    },
    {
        process_cd: 'sashelp_class',
        rule_num: 6,
        isfixed: 1,
    },
    {
        process_cd: 'sashelp_class',
        rule_num: 7,
        isfixed: 0,
    },
    {
        process_cd: 'sashelp_class',
        rule_num: 8,
        isfixed: 0,
    },
    {
        process_cd: 'sashelp_class',
        rule_num: 9,
        isfixed: 0,
    },

];
const PROCESS_RULES = process_rule.map(x => createRefbookItem(x));

module.exports = {
    PROCESS_RULES
};
