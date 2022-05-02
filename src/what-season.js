const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  const winter = 'winter',
        spring = 'spring',
        summer = 'summer',
        autumn = 'autumn';
        if (date.getMonth()>=2 && date.getMonth()<=4) return spring;
        if (date.getMonth()>=5 && date.getMonth()<=7) return summer;
        if (date.getMonth()>=8 && date.getMonth()<=10) return autumn;
        return winter;
}

module.exports = {
  getSeason
};
