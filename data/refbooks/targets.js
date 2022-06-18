const {createRefbookItem} = require("./refbook-item-structure")

const targets = [
    {
        VALUE: 'sashelp_shoes',
        LABEL: 'shoes list',
        CHECK_STP: '/Apps/SASUploader/checkData',
        LOAD_STP: '/Apps/SASUploader/loadData',
        SELECT_CHECKS_STP: '/Apps/SASUploader/selectChecks',
    },
    {
        VALUE: 'sashelp_class',
        LABEL: 'class list',
        CHECK_STP: '/Apps/SASUploader/checkData',
        LOAD_STP: '/Apps/SASUploader/loadData',
        SELECT_CHECKS_STP: '/Apps/SASUploader/selectChecks',
    }
];

const TARGETS = targets.map(x => createRefbookItem(x));

module.exports = {
    TARGETS, targets
}