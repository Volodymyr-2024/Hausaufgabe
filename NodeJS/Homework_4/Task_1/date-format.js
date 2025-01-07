import moment from "moment";

const date1 = moment().format("YYYY-MM-DD");
const date2 = moment().format("MMM Do YY");
const date3 = moment().format("dddd");

console.log(`Data1: ${date1}`);
console.log(`Data2: ${date2}`);
console.log(`Date3: ${date3}`);
