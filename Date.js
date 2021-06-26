console.log("PAST DATE");
const today1 = new Date()
const yesterday = new Date(today1)

yesterday.setDate(yesterday.getDate() - 1)

today1.toDateString()
yesterday.toDateString()
console.log("YESTERDAY DAY : " + yesterday);

//date model
var date2 = new Date(); 
date2.setFullYear(2021, 5, 25);
console.log(date2);

//current date
var today = new Date();
var date = today.getFullYear()+'-'+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getHours() + ":" +today.getMinutes() + ":" + today.getSeconds();
console.log(date);