var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log("Current Timestamp:", now.unix());

var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);
console.log("Current Moment Formated:", currentMoment.format('DD MMM YYYY @ H:mm'));
