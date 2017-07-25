const chalk = require('chalk');
const moments = require('./moment');

console.log(`It is ${moments.getDay()}, ${moments.getDate()}.`);
console.log(`It is the ${moments.getYear()} day of the year.`);
console.log(`It is ${moments.getSeconds()} seconds into the day.`);
console.log(`It ${moments.getDaylight()} during Daylight Savings Time.`);
console.log(`It ${moments.getLeap()} not a leap year.`);


//console.log(moment().format());
