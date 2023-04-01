"use strict";

const hobbies = ["Coding", "Anime", "Gaming"];

const person = {
  firstName: "David",
  birthYear: 2000,
  friends: ["Mia", "Zoe", "Eli", "Ian", "Kai"],
  hasID: true,

  // method
  calcAge: function () {
    return (this.age = 2023 - this.birthYear);
  },
};

console.log(
  `${person.firstName} is a ${person.calcAge()} year old teacher, and he has ${
    person.hasID ? "an" : "no"
  } ID on him`
);
