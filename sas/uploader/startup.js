const { targets } = require("../../data/refbooks/targets");
const { target_columns } = require("../../data/refbooks/target-column");
const { getErrorModal, REF_CODES, ERROR_CODES } = require("../../share/constants");
const {
  createErrorResponse,
  createResponse,
  DELTA_ACTION,
} = require("../../share/response");

const startupResponse = (_debug, _service) => {
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

  // const data = {
  //   targets,
  //   ...dictionaries,
  // };

  const delta_action = DELTA_ACTION.OVERRIDE;
  return createResponse({
    data:[...targets],
    delta_action
  });
}
const respond = (req, resp) => {
  const { _debug, _service } = req.body;
  const responseBody = startupResponse(_debug, _service);
  resp.json(responseBody);
};

module.exports = {
  respond,
};