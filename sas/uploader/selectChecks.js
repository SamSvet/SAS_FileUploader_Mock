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

const selectChecks = (id, params) => {
    const { process_cd } = params;
    if (!process_cd) {
        const { code, modal, message } = getErrorModal(ERROR_CODES.BAD_PARAMS);
        return createErrorResponse(id, code, message, modal);
    }

    const target = targets.find(el => el.process_cd === process_cd);
    if (!target) {
        const { code, modal, message } = getErrorModal(ERROR_CODES.NOT_FOUND);
        return createErrorResponse(id, code, message, modal);
    }

    const processRules = process_rules.filter(el => el.process_cd === process_cd);
    const ruleColumns = rule_columns.filter(
        x => processRules.map(processRule => processRule.rule_num).includes(x.rule_num)
    )
    const conditionsResp = conditions.filter(x => processRules.map(processRule => processRule.rule_num).includes(x.rule_num))

    const data = {
        [REF_CODES.CONDITION]: conditionsResp,
        [REF_CODES.PROCESS_RULE]: processRules,
        [REF_CODES.TARGET]: target,
        [REF_CODES.RULE_COLUMN]: ruleColumns,
        [REF_CODES.PROCESS_RULE]: processRules,
    }

    const delta_action = DELTA_ACTION.OVERRIDE;
    return createResponse({
      id,
      data,
      delta_action
    });
}

const respond = (req, resp) => {
    const { id, params } = req.body;
    const responseBody = selectChecks(id, params);
    resp.json(responseBody);
};
  
  module.exports = {
    respond,
  };