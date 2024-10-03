"use strict";
const display = document.querySelector(".calculator_screen");
const buttons = document.querySelectorAll(".calculator button");

let currentValue = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonText = button.textContent;

    switch (buttonText) {
      case "CE":
      case "C":
        currentValue = "0";
        break;

      case "=":
        currentValue = eval(currentValue);

        break;
      case "DEL":
        if (currentValue.length > 1) {
          currentValue = currentValue.slice(0, -1);
        } else if (currentValue.length === 1) {
          currentValue = "0";
        }
        break;
      case "+":
      case "-":
      case "/":
      case "*":
        if (
          currentValue.endsWith("+") ||
          currentValue.endsWith("-") ||
          currentValue.endsWith("*") ||
          currentValue.endsWith("/")
        ) {
          currentValue = currentValue.slice(0, -1) + buttonText;
        } else {
          currentValue += buttonText;
        }
        break;
      case ".":
        if (!currentValue.includes(".")) {
          currentValue += buttonText;
        }
        break;
      case "0":
      case "00":
        if (currentValue !== "0") {
          currentValue += buttonText;
        }
        break;
      default:
        if (currentValue === "0" && buttonText !== ".") {
          currentValue = buttonText;
        } else if (currentValue.length < 13) {
          currentValue += buttonText;
        } else {
          alert("The number displayed cannot be more than 13 characters");
        }
    }
    currentValue = `${currentValue}`;
    console.log(currentValue);
    document.querySelector(".calculator_screen").textContent = currentValue;
  });
});
