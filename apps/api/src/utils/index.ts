const _ = require('lodash');

export function convertToMultiLevel(obj) {
  return _.transform(obj, (result, value, key) => {
    const keys = key.split('_');
    const lastKey = keys.pop();
    _.set(result, [...keys, lastKey], value);
  });
}
