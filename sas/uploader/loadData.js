const { getErrorModal, REF_CODES, ERROR_CODES } = require("../../share/constants");
const {
  createErrorResponse,
  createResponse,
  DELTA_ACTION,
} = require("../../share/response");
const { CHECK_RESULT } = require("../../data/check_result/check_result-list");

const checkResult = CHECK_RESULT;

const loadData = (id, params) => {
    const { process_cd, tablename } = params;
    if (!process_cd || !tablename) {
        const { code, modal, message } = getErrorModal(ERROR_CODES.BAD_PARAMS);
        return createErrorResponse(id, code, message, modal);
    }
    
    const data = {
      checkResult: checkResult
    };

    const delta_action = DELTA_ACTION.OVERRIDE;
    return createResponse({
      id,
      data,
      delta_action
    });
}

const respond = (req, resp) => {
    const { id, params } = req.body;
    const responseBody = loadData(id, params);
    resp.json(responseBody);
  };
  
  module.exports = {
    respond,
  };