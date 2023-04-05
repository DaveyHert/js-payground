function scoreSum(scores) {
  let sum;

  scores.forEach((score) => {
    sum += score;
  });

  return sum;
}

console.log(scoreSum([5, 10, 5]))
