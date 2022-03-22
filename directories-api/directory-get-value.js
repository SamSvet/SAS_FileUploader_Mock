const { conditions } = require("../data/refbooks/conditions");
const {createResponse, DELTA_ACTION} = require("../share/response");
const {searchByRrefbooks, searchOriginalRefBook} = require('../share/search-by-refbooks');
const {v4} = require("uuid");

const directoryGetValue = (id, ref_code, substring) => {

    const data = { [ref_code]: searchByRrefbooks(ref_code, substring) };
    const delta_action = DELTA_ACTION.OVERRIDE
    return createResponse({id, data, delta_action});
}

const respond = (req, resp) => {
    const {id, params} = req.body;
    const {
        ref_code,
       substring
    } = params;

    const responseBody = directoryGetValue(
        id,
        ref_code,
        substring
    );

    resp.json(responseBody);
}

const respond_get = (req, resp, refBook) => {
    const data = { [refBook]: searchOriginalRefBook(refBook)};
    const delta_action = DELTA_ACTION.OVERRIDE;
    const id = v4();
    const responseBody = createResponse({id, data, delta_action});
    resp.json(responseBody);
}

module.exports = {
    respond, respond_get,
}