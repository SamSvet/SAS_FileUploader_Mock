const { rule_columns } = require("../../data/refbooks/rule-column");
const { process_rules } = require("../../data/refbooks/process-rule");
const { targets } = require("../../data/refbooks/targets");
const { conditions } = require("../../data/refbooks/conditions");
const { target_columns } = require("../../data/refbooks/target-column");
const { getErrorModal, REF_CODES, ERROR_CODES } = require("../../share/constants");
const {
  createErrorResponse,
  createResponse,
  DELTA_ACTION,
} = require("../../share/response");
const { CHECK_RESULT } = require("../../data/check_result/check_result-list");

const checkResult = CHECK_RESULT;

const checkData = (id, params) => {
    const { process_cd } = params;
    if (!process_cd) {
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
    const responseBody = checkData(id, params);
    resp.json(responseBody);
  };
  
  module.exports = {
    respond,
  };