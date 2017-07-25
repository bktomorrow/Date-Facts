const moment = require('moment');
const chalk = require('chalk');

function getDay(){

    return  chalk.blue(moment().format('dddd'));
}
function getYear(){
  return chalk.hex('#d026ba')(((parseInt(moment().startOf('year').fromNow()))*30)+(parseInt(moment().startOf('month').fromNow())));
}
function getDate(){

    return  chalk.blue(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
function getSeconds(){
    return chalk.cyan((parseInt(moment().startOf('day').fromNow())*60)*60);
}
function getDaylight(){
   if(moment().isDST){
     return chalk.green("is")
   }
   else {
     return chalk.red("is not")
   }
}
function getLeap(){
  if(!(moment().format('YYYY')%4)){
    return chalk.green("is")
  }
  else{
    return chalk.red("is not")
  }
}
module.exports.getDay = getDay;
module.exports.getYear = getYear;
module.exports.getDate = getDate;
module.exports.getSeconds = getSeconds;
module.exports.getDaylight = getDaylight;
module.exports.getLeap = getLeap;
