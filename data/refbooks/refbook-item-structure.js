const {sanitize} = require('../../share/sanitize');

const defaultRefbookItem = () => ({
    internal_code: '',
    name: '',
    is_deleted: false,
});

const createRefbookItem = ({
    internal_code,
     name,
     is_deleted,
    }) => ({
    ...defaultRefbookItem(),
    ...sanitize({
        internal_code,
        name,
        is_deleted,
    })
});

const createRefbookItemShortRecord = (refbookItem) => {
    const {internal_code, name } = refbookItem;
    return {internal_code, name};
}

module.exports = {
    createRefbookItem,
    createRefbookItemShortRecord
};