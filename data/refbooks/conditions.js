const {createRefbookItem} = require("./refbook-item-structure");

const conditions = [
    {
        rule_num: 1,
        rule_value: '1',
        rule_condition: "Product not in ('Boot', 'Sandal', 'Slipper')",
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Product has invalid value")',
        label: 'Product',
        value: "Product - value should be in ('Boot', 'Sandal', 'Slipper')",
    },
    {
        rule_num: 2,
        rule_value: '2',
        rule_condition: "Stores<1 or Stores>100",
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Stores should be between 1 and 100")',
        label: 'Stores',
        value: "Stores - Stores>=1 and Stores<=100",
    },
    {
        rule_num: 3,
        rule_value: '3',
        rule_condition: 'Region not in ("Africa", "Western Europe", "Pacific")',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Region has invalid value")',
        label: 'Region',
        value: 'Region - value should be in ("Africa", "Western Europe", "Pacific")',
    },
    {
        rule_num: 4,
        rule_value: '4',
        rule_condition: 'Returns<100.0 or Returns>10000.0',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Returns should be between 100.0 and 10000.0")',
        label: 'Returns',
        value: 'Returns - Returns>=100.0 and Returns<=10000.0',
    },
    {
        rule_num: 5,
        rule_value: '5',
        rule_condition: 'Sex not in ("M", "F")',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Sex has invalid value")',
        label: 'Sex',
        value: 'Sex - value should be in ("M", "F")',
    },
    {
        rule_num: 6,
        rule_value: '6',
        rule_condition: 'Age<10 or Age>16',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Age should be between 10 and 16")',
        label: 'Age',
        value: 'Age - Age>=10 and Age<=16',
    },
    {
        rule_num: 7,
        rule_value: '7',
        rule_condition: 'Height<50.0 or Height>70.0',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Height should be between 50.0 and 70.0")',
        label: 'Height',
        value: 'Height - Height>=50.0 and Height<=70.0',
    },
    {
        rule_num: 8,
        rule_value: '8',
        rule_condition: 'Weight<80.0 or Weight>120.0',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Weight should be between 80.0 and 120.0")',
        label: 'Weight',
        value: 'Weight - Weight>=80.0 and Weight<=120.0',
    },
    {
        rule_num: 9,
        rule_value: '9',
        rule_condition: 'Name ne "Sam"',
        rule_description: 'catx(byte(10), &mvFlagName, "Error:Name should be `Sam`")',
        label: 'Name',
        value: 'Name - Name="Sam"',
    },
    {
        rule_num: 100,
        rule_value: '100',
        rule_condition: 'max(of &mvFlagName{*})<-1',
        rule_description: '"Success:Valid row"',
        label: '',
        value: '',
    },
];

const CONDITIONS = conditions.map(x => createRefbookItem(x));

module.exports = {
    CONDITIONS, conditions,
}