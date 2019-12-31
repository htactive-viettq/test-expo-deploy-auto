export const arrayToObject = (array, keyName = "id") => array.reduce((result, item) => {
  result[item[keyName]] = item;
  return result;
}, {});
