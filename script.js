"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
  return tip;
}
function checkOut() {
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
  }
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

checkOut();
console.log(tips);
console.log(totals);
console.log(calcAverage(tips));
console.log(calcAverage(totals));
