"use strict";

const john = {
  fullName: "John Smith",
  mass: { value: 92, unit: "kg" },
  height: { value: 1.95, unit: "m" },

  calcBMI: function () {
    return (this.bmi = (this.mass.value / (this.height.value * 2)).toFixed(2));
  },
};

const mark = {
  fullName: "Mark Miller",
  mass: { value: 78, unit: "kg" },
  height: { value: 1.69, unit: "m" },

  calcBMI: function () {
    return (this.bmi = (this.mass.value / (this.height.value * 2)).toFixed(2));
  },
};

const friendsArray = ["Ed", "Mia", "Vie", "Jimmy", "OJ"];

for (let i = friendsArray.length; i >= 0; i--) {
  console.log(friendsArray[i], i);
}
