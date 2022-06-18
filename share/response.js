const {sanitize} = require('./sanitize');

const RESPONSE_STATUS = {
    SUCCESS: 'success',
    OK: 'ok',
    FAIL: 'fail',
    ERROR: 'error',
};

const  DELTA_ACTION = {
    MERGE: 'merge',
    OVERRIDE: 'override',
}

// const defaultResult = () => ({
//     response: RESPONSE_STATUS.OK,
//     code: null,
//     message: null,
//     inner_errors: null,
//     modal: null,
//     popup: null,
//     screen: null,
//     screen_data: null,
//     filter_data: null,
//     bad_attributes: null,
//     data: {},
//     delta_action: '',
//     delta: {},
//     instructions: undefined,
// });

const defaultResult = () => ({
    status: RESPONSE_STATUS.SUCCESS,
    usermessage: 'This is mock usermessage',
    logmessage: 'This is mock logmessage',
    requestingUser: 'Svetlichny-SV@saspw',
    requestingPerson: 'Svetlichnyy Sam',
    executingPid: 1234,
    sasDatetime: 1963591798.8,
    data:{},
});

const defaultSimpleResult = () => ({
    response: RESPONSE_STATUS.SUCCESS,
    data: {},
});


const createResponse = ({
                            status,
                            usermessage,
                            logmessage,
                            requestingUser,
                            requestingPerson,
                            executingPid,
                            sasDatetime,
                            data,
                        }) => {

    const jsonrpc = '2.0';

    const result = {
        ...defaultResult(),
        ...sanitize({
            status,
            usermessage,
            logmessage,
            requestingUser,
            requestingPerson,
            executingPid,
            sasDatetime,
            data
        })
    };

    return {jsonrpc, ...result};
}

// const createErrorResponse = (
//     id,
//     code,
//     message,
//     modal,
// ) => {
//     const response = RESPONSE_STATUS.FAIL;
//     const delta = {};
//     const data = {};
//     const delta_action = DELTA_ACTION.MERGE;
//     const bad_attributes = null;
//     return createResponse({
//         id, response, code, message, modal, bad_attributes, data, delta, delta_action
//     });
// }

const createErrorResponse = (
    id,
    usermessage,
    logmessage,
) => {
    const status = RESPONSE_STATUS.FAIL;
    return createResponse({
        id, status, usermessage, logmessage,
    });
}
module.exports = {
    createResponse,
    createErrorResponse,
    RESPONSE_STATUS,
    DELTA_ACTION,
}