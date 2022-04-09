const {randomInteger, randomIntegerList} = require("../../share/utils");
const {createResponse, DELTA_ACTION} = require("../../share/response");
const {SCREENS} = require("../../share/constants");
const {FILE_STORAGE} = require("../../data/files/file-storage");
const {getOrder} = require("./utils/get-order");
const {v4: uuidv4} = require('uuid');
const fs = require('fs');

const isOptionalInnFileDataExists = () => {
    return !!randomInteger(0, 1);
};

const addFileOrderSuccessResponse = (id, order_id, inn_file) => {
    const screen = SCREENS.ORDER_EDITOR;
    const delta_action = DELTA_ACTION.MERGE;
    // let lines = randomIntegerList(randomInteger(1, 10), 0, 100).sort((a, b ) => a - b);
    // let ui_data;
    // let data = {};
    // const optional_inn_file_data = {
    //     unsuccessful_count: lines.length,
    //     unsuccessful_lines: lines
    // };
    // ui_data = isOptionalInnFileDataExists() ? [{ optional_inn_file_data }] : []
    // const delta = {
    //     orders: [{ inn_file }],
    //     ui_data: ui_data
    // };
    // if (order_id) {
    //     data = getOrder(order_id).data;
    // }
    const data = {
        upload: {sasTableName:'INTERMEDIATE', sasTableSchema:'MA_TMP', obsNum: randomInteger(1,100)}
    };

    return createResponse({id, data, screen, delta_action,});
}

const saveUploadFile = (user_file, blobFileInfo) => {
    FILE_STORAGE.save(user_file.id, blobFileInfo);

    const fileNameParts = user_file.name.split('.');
    const extension = fileNameParts[fileNameParts.length - 1];
    const newFileName = `user_file.${extension}`;

    const path = `data/files/${newFileName}`;
    fs.createWriteStream(path).write(blobFileInfo.buffer);
}

const respond = (req, resp) => {
    let responseBody;
    const {id, params: {order_id}} = req.body;
    const [ blobFileInfo ] = req.body.files;
    const name = blobFileInfo.originalname;
    const size = blobFileInfo.size;

    const user_file = {
        id: uuidv4(),
        name,
        size,
        count: randomInteger(1, 300)
    };

    saveUploadFile(user_file, blobFileInfo);

    responseBody = addFileOrderSuccessResponse(id, order_id, user_file);
    resp.json(responseBody);
}

module.exports = {
    respond
}