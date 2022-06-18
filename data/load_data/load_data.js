const { createLoadData } = require("./load_data-structure");
const { randomInteger, randomDate, currentDate, randomString } = require("../../share/utils");

const fillRandomFields = () => ({
    user_data: `USER.USER_DATA_${currentDate()}`,
    date_load: currentDate(),
    file_name: `${randomString(10)}.xlsx`,
    file_usage_period: randomDate(),
    process_name: randomString(10),
    good_count: randomInteger(1, 100),
    bad_count: randomInteger(1, 100),
    error_text: '',
    load_pid: 1234,
    load_user: 'Svetlichny-SV',
    load_ip: '127.0.0.1',
})

const LOAD_DATA = {...fillRandomFields()}

module.exports = {
    LOAD_DATA
};