"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  let tip = 0;

  if (bill >= 50 && bill <= 300) {
    tip = (15 / 100) * bill;
  } else {
    tip = (20 / 100) * bill;
  }
  return tip;
}

function calTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

  return tip;
}
ßß;
