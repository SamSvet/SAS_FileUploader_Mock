const {randomInteger} = require("./utils");
const getRandomItemsFromArray = (itemsArray, count) => {
    const indexes = [];
    while(indexes.length < count){
        const i = randomInteger(0, itemsArray.length - 1);
        if (indexes.includes(i)){
            continue;
        }
        indexes.push(i);
    }
    const result = indexes.map(i => itemsArray[i]);
    return result;
}

const getRandomItem = (items) => getRandomItemsFromArray(items, 1)[0];

module.exports = {
    getRandomItemsFromArray,
    getRandomItem,
}