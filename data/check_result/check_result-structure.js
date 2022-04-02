const {v4} = require("uuid");
const {sanitize} = require('../../share/sanitize');
const {CAMPAIGN_STATUS} = require('../../share/constants');
const {currentDate} = require('../../share/utils');

const defaultCheckResult = () => ({
    rc: null,
    cnt: randomInteger(0,100),
    desc: null,
    tablename: 'MA_TMP.INTERMEDIATE',
})