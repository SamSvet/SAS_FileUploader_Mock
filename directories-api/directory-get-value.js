const {createResponse, DELTA_ACTION} = require("../share/response");
const {searchByRrefbooks} = require('../share/search-by-refbooks');

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

module.exports = {
    respond
}