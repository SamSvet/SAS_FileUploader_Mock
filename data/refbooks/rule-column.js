const {createRefbookItem} = require("./refbook-item-structure");

const rule_columns = [
    {
        rule_num: 1,
        rule_column: ['Product'],
    },
    {
        rule_num: 2,
        rule_column: ['Stores'],
    },
    {
        rule_num: 3,
        rule_column: ['Region'],
    },
    {
        rule_num: 4,
        rule_column: ['Returns'],
    },
    {
        rule_num: 5,
        rule_column: ['Sex'],
    },
    {
        rule_num: 6,
        rule_column: ['Age'],
    },
    {
        rule_num: 7,
        rule_column: ['Height'],
    },
    {
        rule_num: 8,
        rule_column: ['Weight'],
    },
    {
        rule_num: 9,
        rule_column: ['Name'],
    },
]

const RULE_COLUMNS = rule_columns.map(x => createRefbookItem(x));

module.exports = {
    RULE_COLUMNS, rule_columns
}