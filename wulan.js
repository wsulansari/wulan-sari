var panggilUntukInput = require('readline-sync');
var jam = panggilUntukInput.questionInt("Input jam: ");
console.log(jam*3600 + "Detik");
var menit = panggilUntukInput.questionInt("Input Menit: ");
console.log(menit*60 + "Detik");