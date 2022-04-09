const express = require("express");
const cors = require("cors");
const multer = require("multer");
// const SAS_API = require("./sas-api/api");
const DICT_API = require("./directories-api/api")
const {ERROR_CODES, getErrorModal} = require("./share/constants");
const { createErrorResponse } = require("./share/response");
const {CONDITIONS, conditions} = require("./data/refbooks/conditions")
const {fileMiddleware} = require("./middleware/file-middleware");
const PORT = process.env.PORT || 3100;
const app = express()

app.use(
    cors({
      exposedHeaders: "*",
    })
  );
  
app.use(express.json());

app.use(multer().array("resource"));

app.use(fileMiddleware);

// app.post(SAS_API.path, (req, res) => SAS_API.respond(req, res));
app.get(`${DICT_API.path}/:refBook`, (req, res) => {
  DICT_API.respond(req, res)
  // res.status(200).json(conditions)
})
app.use( (err, req, res, next) => {
  console.log(err.stack);
  const { id } = req.body;
  const { code, modal, message } = getErrorModal(ERROR_CODES.SYSTEM_ERROR);
  const response = createErrorResponse(id, code, message, modal);
  res.status(500);
  res.json(response);
});

try {
    app.listen(PORT, () => {
      console.log(`server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }