const { months } = require('moment-timezone');
var moment = require('moment-timezone');

// [ 'Europe/Berlin', 'Europe/Busingen', 'Europe/Zurich' ]
// [ 'Europe/Paris' ]
// [ 'Europe/Helsinki' ]
// [ 'Europe/Rome' ]
// [ 'Africa/Ceuta', 'Atlantic/Canary', 'Europe/Madrid' ]
// [ 'Europe/Vienna' ]
// [ 'Europe/Amsterdam' ]
// [ 'Europe/Copenhagen' ]
// [ 'Europe/Oslo' ]
// [ 'Europe/Stockholm' ]

var localMoment = moment();
var utcMoment = moment.utc();

// console.log(localMoment.format());
// console.log(utcMoment.format());

deMoment = moment.tz("Europe/Berlin");
fiMoment = moment.tz("Europe/Helsinki");

// console.log(deMoment.format())
// console.log(deMoment.utc())
// console.log(fiMoment.format());

dt = "2020-01-25T15:00"; // DE

deTime = moment.tz(dt, "Europe/Berlin");
console.log(deTime.format())
console.log(deTime.utc().format())

console.log(deMoment.format("Z"))