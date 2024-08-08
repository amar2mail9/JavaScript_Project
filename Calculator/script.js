let displayValue = "";

const handleONClick = (value) => {
  let display = document.getElementById("display");

  let error = document.getElementById("error");

  if (value === "AC") {
    displayValue = "";
    error.innerHTML = "";
    error.style.display = "none";
  } else if (value === "=") {
    try {
      displayValue = eval(displayValue).toFixed(5);
      error.style.display = "none";
    } catch (e) {
      error.innerHTML = "Invalid Expression (Enter first number)";
      displayValue = "";
      error.style.display = "block";
    }
  } else if (value === "DE") {
    displayValue = displayValue.slice(0, -1);
    error.style.display = "none";
  } else if (value === "%") {
    displayValue = (eval(displayValue) / 100).toString();
    error.style.display = "none";
  } else if (displayValue === "" && ["+", "-", "*", "/"].includes(value)) {
    error.style.display = "block";
  } else {
    displayValue += value;
    error.style.display = "none";
  }
  display.value = displayValue;
};
