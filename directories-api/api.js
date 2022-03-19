const {PATHS} = require("../share/constants");
const directoryGetValue = require('./directory-get-value');

const respond = (req, resp) => {
    const {method} = req.body;
    switch (method) {
        case 'directory-get-value':
            directoryGetValue.respond(req, resp);
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