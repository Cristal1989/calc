const result = document.getElementById('result');
const reset = document.querySelector('.reset');
const input = document.querySelector('.input__place');
let number1 = '';
let number2 = '';
let number0 = '';
let math = '';
let resultNum = '';

// ==================== Numbers
function buttonNum0onclick() {
  if (result.value === '0') {
    result.value = 0;
  } else {
    result.value += 0;
  }
}
function buttonNum1onclick() {
  if (result.value === '0') {
    result.value = 1;
  } else {
    result.value += 1;
  }
}
function buttonNum2onclick() {
  if (result.value === '0') {
    result.value = 2;
  } else {
    result.value += 2;
  }
}
function buttonNum3onclick() {
  if (result.value === '0') {
    result.value = 3;
  } else {
    result.value += 3;
  }
}
function buttonNum4onclick() {
  if (result.value === '0') {
    result.value = 4;
  } else {
    result.value += 4;
  }
}
function buttonNum5onclick() {
  if (result.value === '0') {
    result.value = 5;
  } else {
    result.value += 5;
  }
}
function buttonNum6onclick() {
  if (result.value === '0') {
    result.value = 6;
  } else {
    result.value += 6;
  }
}
function buttonNum7onclick() {
  if (result.value === '0') {
    result.value = 7;
  } else {
    result.value += 7;
  }
}
function buttonNum8onclick() {
  if (result.value === '0') {
    result.value = 8;
  } else {
    result.value += 8;
  }
}
function buttonNum9onclick() {
  if (result.value === '0') {
    result.value = 9;
  } else {
    result.value += 9;
  }
}
function buttonTochkaonclick() {
  result.value += '.';
}

// =========================== Math
function plus() {
  number1 = result.value;
  result.value = '';
  math = '+';
  input.placeholder = number1;
}
function minus() {
  number1 = result.value;
  result.value = '';
  math = '-';
  input.placeholder = number1;
}
function division() {
  number1 = result.value;
  result.value = '';
  math = '/';
  input.placeholder = number1;
}
function multi() {
  number1 = result.value;
  result.value = '';
  math = '-';
  input.placeholder = number1;
}
function rootFoo() {
  number0 = result.value;
  result.value = Math.sqrt(number0);
}

// =========================== Result

function resultFoo() {
  number2 = result.value;
  if (math === '+') {
    resultNum = parseFloat(number1) + parseFloat(number2);
  } else if (math === '-') {
    resultNum = parseFloat(number1) + parseFloat(number2);
  } else if (math === '*') {
    resultNum = parseFloat(number1) * parseFloat(number2);
  } else if (math === '/') {
    resultNum = parseFloat(number1) / parseFloat(number2);
  } else if (result.value !== '') {
    input.placeholder = 'Enter a math';
  }
  result.value = resultNum;
}

// ======================== reset
function resetFoo() {
  result.value = '';
  number1 = '';
  number2 = '';
  math = '';
  input.placeholder = 0;
}
