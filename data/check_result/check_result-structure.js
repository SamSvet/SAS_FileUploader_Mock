const {sanitize} = require('../../share/sanitize');

const defaultCheckResult = () => ({
    rc: null,
    cnt: 0,
    desc: null,
    tablename: 'MA_TMP.INTERMEDIATE',
})

const createCheckResult = ({
    rc,
    cnt,
    desc,
    tablename,
}) => ({
    ...defaultCampaign(),
    ...sanitize({
        rc,
        cnt,
        desc,
        tablename,
    })
});

module.exports = {
    defaultCheckResult,
    createCheckResult,
};