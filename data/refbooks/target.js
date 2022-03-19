const {createRefbookItem} = require("./refbook-item-structure")

const target = [
    {
        process_cd: 'sashelp_shoes',
        process_name: 'shoes list',
        target_table: 'SASHELP.SHOES',
        target_table_dyn: '',
        check_stp: '/Apps/SASUploader/checkData',
        load_stp: '/Apps/SASUploader/loadData',
        select_checks_stp: '/Apps/SASUploader/selectChecks',
    },
    {
        process_cd: 'sashelp_class',
        process_name: 'class list',
        target_table: 'SASHELP.CLASS',
        target_table_dyn: '',
        check_stp: '/Apps/SASUploader/checkData',
        load_stp: '/Apps/SASUploader/loadData',
        select_checks_stp: '/Apps/SASUploader/selectChecks',
    }
];

const TARGETS = target.map(x => createRefbookItem(x));

module.exports = {
    TARGETS,
}