var moment = require('moment-timezone');

console.log(moment().format("LLLLLL"));

const date1 = "2020-01-05T13:00";

var date = moment(date1).format('DD-MM-YYYY dddd');
console.log(date);

const all_tz = moment.tz.names();
const de_tz = moment.tz.zonesForCountry("DE");
const fr_tz = moment.tz.zonesForCountry("FR");
const fi_tz = moment.tz.zonesForCountry("FI");
const it_tz = moment.tz.zonesForCountry("IT");
const es_tz = moment.tz.zonesForCountry("ES");
const at_tz = moment.tz.zonesForCountry("AT");
const nl_tz = moment.tz.zonesForCountry("NL");
const dk_tz = moment.tz.zonesForCountry("DK");
const no_tz = moment.tz.zonesForCountry("NO");
const se_tz = moment.tz.zonesForCountry("SE");

console.log(de_tz);
console.log(fr_tz);
console.log(fi_tz);
console.log(it_tz);
console.log(es_tz);
console.log(at_tz);
console.log(nl_tz);
console.log(dk_tz);
console.log(no_tz);
console.log(se_tz);

console.log(moment.tz.zone("Europe/Berlin").offset);
// console.log(moment().utcOffset());