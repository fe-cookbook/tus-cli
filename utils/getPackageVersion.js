const { request } = require('./request');

module.exports = async function getPackageVersion(id, range = '') {
  const registry = `https://registry.npmjs.org`;
  let result;
  try {
    result = await request.get(
      `${registry}/${encodeURIComponent(id).replace(/^%40/, '@')}/${range}`
    );
  } catch (e) {
    return e;
  }
  return result;
};
