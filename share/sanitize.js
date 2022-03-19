const sanitize = (obj = {}, isRemoveEmptyArrays = false) => {
    const isEmptyArray = value => value instanceof Array && value.length === 0;
    const result = Object.keys(obj).reduce((res, key) => {
        if (
            isRemoveEmptyArrays && isEmptyArray(obj[key]) ||
            obj[key] === undefined
        ){
            return res;
        }

        res[key] = obj[key];
        return res;
    }, {});
    return result; 
};

module.exports = {sanitize};