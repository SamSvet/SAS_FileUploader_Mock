const {createRefbookItem} = require("./refbook-item-structure")

const target_columns = [
    {
        target_table: 'SASHELP.SHOES',
        target_column: ['Product', 'Stores', 'Region', 'Returns']
    },
    {
        target_table: 'SASHELP.CLASS',
        target_column: ['Sex', 'Name', 'Age', 'Height', 'Weight',]
    }
];

const TARGET_COLUMNS = target_columns.map(x => createRefbookItem(x));

module.exports = {
    TARGET_COLUMNS, target_columns
}