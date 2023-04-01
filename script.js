const button = document.querySelector("button");
const announce = () => alert("You're old enough");

button.addEventListener("click", function () {
  const age = +prompt("How old are you?");
  // Loose equlity
  if (age === 18) announce();
  else alert("Access Denied!");
});
