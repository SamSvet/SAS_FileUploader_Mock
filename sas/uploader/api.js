const startup = require("./startup");
const selectChecks = require("./selectChecks");
const checkData = require("./checkData");
const {PATHS} = require("../../share/constants");

const respond = (req, resp) => {
    const {method} = req.body;
    switch (method) {
        case 'startup':
            startup.respond(req, resp);
            break;
        case 'selectChecks':
            selectChecks.respond(req, resp);
            break;
        case 'checkData':
            checkData.respond(req, resp);
            break;
        case 'loadData':
            loadData.respond(req, resp);
            break;
        case 'download':
            download.respond(req, resp);
            break;
        case 'upload':
            upload.respond(req, resp);
            break;
        default:
            break;
    }
}

module.exports = {
    path: PATHS.SAS_UPLOADER,
    method: 'POST',
    respond
};