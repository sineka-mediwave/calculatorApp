// program for a simple calculator
let result = document.querySelector("#result");
let operand = document.querySelectorAll(".value");
let operator = document.querySelectorAll(".operator");

for (let i = 0; i < operand.length; i++) {
  const val = operand[i];
  val.addEventListener("click", function () {
    result.textContent += val.textContent;
  });
}

for (let i = 0; i < operator.length; i++) {
  const op = operator[i];
  op.addEventListener("click", function () {
    result.textContent += op.value;
  });
}

function displayResult() {
  document.querySelector("#equal").addEventListener("click", function () {
    resultShow();
  });
}

function resultShow() {
  const evalu = document.createElement("p");
  result.appendChild(evalu);
  if (result.textContent.includes("+")) {
    let res = result.textContent.split("+");
    evalu.textContent = parseInt(res[0]) + parseInt(res[1]);
  } else if (result.textContent.includes("-")) {
    let res = result.textContent.split("-");
    evalu.textContent = parseInt(res[0]) - parseInt(res[1]);
  } else if (result.textContent.includes("*")) {
    let res = result.textContent.split("*");
    evalu.textContent = parseInt(res[0]) * parseInt(res[1]);
  } else if (result.textContent.includes("/")) {
    let res = result.textContent.split("/");
    evalu.textContent = parseInt(res[0]) / parseInt(res[1]);
  }
}
function clear() {
  document.querySelector("#clear").addEventListener("click", function () {
    result.textContent = "";
  });
}
clear();
displayResult();
