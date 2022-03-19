const {createErrorResponse} = require("../share/response");
const {ERROR_CODES, ERROR_MESSAGES, ERROR_MODALS} = require("../share/constants");

const notFoundResponse = (id) => {
  const code = ERROR_CODES.NOT_FOUND;
  const message = ERROR_MESSAGES.NOT_FOUND;
  const modal = ERROR_MODALS.FAIL;
  return createErrorResponse( id, code, message, modal );
};

const noAccessResponse = (id) => {
  const code = ERROR_CODES.NO_ACCESS;
  const message = ERROR_MESSAGES.NO_ACCESS;
  const modal = ERROR_MODALS.NO_ACCESS;
  return createErrorResponse( id, code, message, modal );
};

const respond = (req, resp) => {
  const { id } = req.body;
  const { campaign_id } = req.body.params;
  if (campaign_id) {
    const path = "data/preview/files/invoice.pdf";
    // setTimeout(() => resp.download(path), 5000);
    resp.download(path)
  } else {
    resp.json(notFoundResponse(id));
  }
}

module.exports = {
  respond
};