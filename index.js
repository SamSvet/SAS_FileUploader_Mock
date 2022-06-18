const express = require("express");
const cors = require("cors");
const multer = require("multer");
const SAS_API = require("./sas/uploader/api");
const DICT_API = require("./directories-api/api")
const {ERROR_CODES, getErrorModal} = require("./share/constants");
const { createErrorResponse } = require("./share/response");
const {CONDITIONS, conditions} = require("./data/refbooks/conditions")
const {fileMiddleware} = require("./middleware/file-middleware");
const { fillAppData } = require("./middleware/appData-middleware");
const PORT = process.env.PORT || 8080;
const app = express()

app.use(
    cors({
      exposedHeaders: "*",
    })
  );
  
app.use(express.json());

// app.use(multer({ dest: "uploads/" }).array("app_data"));
//app.use(multer({ dest: "uploads/" }).fields([{name:"app_data"}, {name:"myFile"}]));
// app.use(multer({ dest: "uploads/" }).any());
// app.use(multer({ dest: "uploads/" }).single("myFile"));
app.use(multer().array("app_data"));
// const upload = multer({ dest: "uploads/" })
app.use(fillAppData);
//app.use(fileMiddleware);

//const upload = multer();
// app.post(SAS_API.path, upload.array("app_data"), (req, res) => {
//   console.log(req.body);
//   console.log(req.files);
//   res.json({ message: "Successfully uploaded files" });
// });

app.post(SAS_API.path, (req, res) => SAS_API.respond(req, res));
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