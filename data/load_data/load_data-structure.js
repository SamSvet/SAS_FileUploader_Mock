const {sanitize} = require('../../share/sanitize');
const {currentDate} = require('../../share/utils');

const defaultLoadData = () => ({
    user_data: null,
    date_load: currentDate(),
    file_name: null,
    file_usage_period: null,
    process_name: null,
    good_count: null,
    bad_count: null,
    error_text: null,
    load_pid: null,
    load_user: null,
    load_ip: null,
});

const createLoadData = ({
    user_data,
    date_load,
    file_name,
    file_usage_period,
    process_name,
    good_count,
    bad_count,
    error_text,
    load_pid,
    load_user,
    load_ip,
}) => ({
    ...defaultLoadData(),
    ...sanitize({
        user_data,
        date_load,
        file_name,
        file_usage_period,
        process_name,
        good_count,
        bad_count,
        error_text,
        load_pid,
        load_user,
        load_ip
    })
});

module.exports = {
    defaultLoadData,
    createLoadData,
};
