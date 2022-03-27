const { CONDITIONS } = require("../../data/refbooks/conditions");
const { PROCESS_RULES } = require("../../data/refbooks/process-rule");
const { RULE_COLUMNS } = require("../../data/refbooks/rule-column");
const { targets } = require("../../data/refbooks/targets");
const { target_columns } = require("../../data/refbooks/target-column");
const { getErrorModal, ERROR_CODES, SCREENS, REF_CODES } = require("../../share/constants");
const {
  createErrorResponse,
  createResponse,
  DELTA_ACTION,
} = require("../../share/response");

const startupResponse = (id, params) => {
  // const { requestingUser } = params;
  // if (!requestingUser) {
  //   const { code, modal, message } = getErrorModal(ERROR_CODES.NOT_FOUND);
  //   return createErrorResponse(id, code, message, modal);
  // }

  const dictionaries = {
    [REF_CODES.TARGET_COLUMN]: target_columns.filter((x) =>
    targets
      .map((target) => target.target_table)
      .includes(x.target_table)
  ),
  }

  const data = {
    targets,
    ...dictionaries,
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
  const responseBody = startupResponse(id, params);
  resp.json(responseBody);
};

module.exports = {
  respond,
};