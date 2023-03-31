const marksWeight = 78;
const marksHeight = 1.69;
const JohnsHeight = 95;
const JohnsWeight = 5.76;
let markHigherBMI;

const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = JohnsWeight / (JohnsHeight * JohnsHeight);

markHigherBMI = marksBMI > johnsBMI;
console.log(johnsBMI, johnsBMI, markHigherBMI)

if (markHigherBMI) {
  console.log(`Mark has a higher BMI of ${marksBMI}`);
} else if (johnsBMI > marksBMI) {
  console.log(`John has a higher BMI of ${johnsBMI}`);
} else {
  console.log(`Both have the same BMI`);
}

