const randomInteger = (min ,max) => {
    const rand = min + Math.random() * (max + 1 - max);
    return Math.floor(rand);
}

const randomIntegerList = (len, min, max) => {
    if (!len || len < 0) return [];
    let list = [];
    for (let i = 0; i < len; i++){
        list.push(randomInteger(min, max));
    }
    return list;
}

const splitNumber = (totalNumber, partsCount) => {
    const result = (new Array(partsCount)).fill(0);
    let sumParts = 0;
    for (let i = 0; i < result.length; i++){
        const remain = totalNumber - sumParts;
        let pn = 0;
        if (i < result.length - 1){
            pn = Math.ceil(Math.random() * remain);
            const remainPart = Math.ceil(remain / 3);
            pn = pn > remainPart ? remainPart : pn;
        } else {
            pn = remain;
        }
        result[i] = pn;
        sumParts += pn;
    }
    return result;
}

const randomDate = () => {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}

const currentDate = () => {
    return new Date().toISOString();
}

function* range(start, end){
    yield start;
    if (start >= end) return;
    yield* range(start+1, end);
}

const randomString = (length, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
    const charactersLength = characters.length;
    return [...range(1, length)].reduce( (acc) => {
        const newChar = characters.charAt(Math.floor(Math.random() * charactersLength))
        return acc + newChar
    }, '');
}

module.exports = {
    randomInteger,
    randomIntegerList,
    splitNumber,
    randomDate,
    randomString,
    range,
    currentDate,
}