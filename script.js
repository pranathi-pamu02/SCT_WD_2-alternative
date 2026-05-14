let display = document.getElementById("display");

/**
 * Append values to display
 */
function appendValue(value) {
  display.value += value;
}

/**
 * Clear display
 */
function clearDisplay() {
  display.value = "";
}

/**
 * Delete last character
 */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/**
 * Calculate result using eval
 */
function calculate() {
  try {
    if (display.value === "") {
      return;
    }
    // Note: eval is used here for simplicity in a frontend demo
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1500);
  }
}

/**
 * Keyboard Support logic
 */
document.addEventListener("keydown", function(event) {
  const key = event.key;

  // Numbers and operators
  if (
    (key >= '0' && key <= '9') ||
    ['+', '-', '*', '/', '.', '%'].includes(key)
  ) {
    display.value += key;
  }
  // Enter key for result
  else if (key === "Enter") {
    calculate();
  }
  // Backspace to delete
  else if (key === "Backspace") {
    deleteLast();
  }
  // Escape to clear all
  else if (key === "Escape") {
    clearDisplay();
  }
});