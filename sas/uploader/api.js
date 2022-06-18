const startup = require("./startup");
const selectChecks = require("./selectChecks");
const checkData = require("./checkData");
const {PATHS} = require("../../share/constants");

const respond = (req, resp) => {
    const {_program} = req.body;
    switch (_program) {
        case '/Apps/SASFileUploader/startupService':
            startup.respond(req, resp);
            break;
        case '/Apps/SASFileUploader/selectChecks':
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
        case '/Apps/SASFileUploader/uploadService':
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