const {sanitize} = require('./sanitize');

const RESPONSE_STATUS = {
    OK: 'ok',
    FAIL: 'fail'
};

const  DELTA_ACTION = {
    MERGE: 'merge',
    OVERRIDE: 'override',
}

const defaultResult = () => ({
    response: RESPONSE_STATUS.OK,
    code: null,
    message: null,
    inner_errors: null,
    modal: null,
    popup: null,
    screen: null,
    screen_data: null,
    filter_data: null,
    bad_attributes: null,
    data: {},
    delta_action: '',
    delta: {},
    instructions: undefined,
});

const defaultSimpleResult = () => ({
    response: RESPONSE_STATUS.OK,
    data: {},
});


const createResponse = ({
                            id,
                            response,
                            code,
                            message,
                            inner_errors,
                            modal,
                            popup,
                            screen,
                            screen_data,
                            filter_data,
                            bad_attributes,
                            data,
                            delta_action,
                            delta,
                            instructions
                        }) => {

    const jsonrpc = '2.0';

    const result = {
        ...defaultResult(),
        ...sanitize({
            response,
            code,
            message,
            inner_errors,
            modal,
            popup,
            screen,
            screen_data,
            filter_data,
            bad_attributes,
            data,
            delta_action,
            delta,
            instructions
        })
    };

    return {id, jsonrpc, result};
}

const createErrorResponse = (
    id,
    code,
    message,
    modal,
) => {
    const response = RESPONSE_STATUS.FAIL;
    const delta = {};
    const data = {};
    const delta_action = DELTA_ACTION.MERGE;
    const bad_attributes = null;
    return createResponse({
        id, response, code, message, modal, bad_attributes, data, delta, delta_action
    });
}

module.exports = {
    createResponse,
    createErrorResponse,
    RESPONSE_STATUS,
    DELTA_ACTION,
}