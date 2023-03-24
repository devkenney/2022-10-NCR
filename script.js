const fs = require('fs');
const daysOfWeek = require('./days-of-week')
console.log(typeof fs);

console.log(daysOfWeek);
console.log(daysOfWeek.getWeekday(5));

fs.writeFile('./hello.txt', 'Hello!', function() {
  console.log('done creating file');
})