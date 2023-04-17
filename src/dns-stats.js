const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, item) => {
    let rev = item.split('.').reverse();
   
    for (let i = 0; i < rev.length; i++) {
      let dns = '.' + rev.slice(0, i + 1).join('.');
      acc[dns] ? (acc[dns] += 1) : (acc[dns] = 1);
    }

    // console.log(acc);
    return acc;
  }, {})
}

module.exports = {
  getDNSStats
};
