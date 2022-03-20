const {PATHS} = require("../share/constants");
const directoryGetValue = require('./directory-get-value');

const respond = (req, resp) => {
    const method = req.body.method ? req.body.method : req.method;
    const {refBook} = req.params;
    switch (method) {
        case 'directory-get-value':
            directoryGetValue.respond(req, resp);
            break;
        case 'GET':
            directoryGetValue.respond_get(req, resp, refBook);
            break;
        default:
            break;
    }
};


module.exports = {
    path: PATHS.DICTIONARIES,
    method: 'POST',
    respond
};