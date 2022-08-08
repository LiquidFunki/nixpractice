/* task1 */

function isPow(value) {
  let res = 0;
  let n = 1;
  while (res < value) {
    if (value == 1 << n) {
      return true;
    } else {
      res = 1 << n;
      n++;
    }
  }
  return false;
}

/* task2 */

function findSubWord(str, word) {
  let newStr = str.replace(/\s+/g, " ");
  let arr = newStr.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)) {
      return arr[i];
    }
  }
}

/* task3 */

function strPad(input, fullLen, fillStr, fillType) {
  let newStr;
  let temp = "";
  let diff = fullLen - input.length;
  if (fillType == "FILL_RIGHT") {
    if (diff > fillStr.length) {
      mid = diff / fillStr.length;
      for (let i = 0; i < mid; i++) {
        temp += fillStr;
      }
      temp = temp.slice(0, diff);
      newStr = input + temp;
      return newStr.slice(0, fullLen);
    } else {
      newStr = input + fillStr;
      return newStr.slice(0, fullLen);
    }
  } else if (fillType == "FILL_LEFT") {
    if (diff > fillStr.length) {
      mid = diff / fillStr.length;
      for (let i = 0; i < mid; i++) {
        temp += fillStr;
      }
      temp = temp.slice(0, diff);
      newStr = temp + input;
      return newStr.slice(0, fullLen);
    } else {
      newStr = fillStr + input;
      return newStr.slice(0, fullLen);
    }
  } else if (fillType == "FILL_BOTH") {
    if (diff > fillStr.length) {
      mid = diff / fillStr.length;
      for (let i = 0; i < mid; i++) {
        temp += fillStr;
      }
      temp = temp.slice(0, diff / 2); //if not even works bad
      newStr = temp + input + temp;
      return newStr.slice(0, fullLen);
    } else {
      newStr = fillStr + input + fillStr;
      return newStr.slice(0, fullLen);
    }
  } else {
    console.error("Invalid fill type");
  }
}

/* task4 */

function checkDate(date) {
  return RegExp(
    "^([0-9]|0[1-9]|[1-2][0-9]|3[01])-([0-9]|0[1-9]|1[012])-([0-9])+$"
  ).test(date);
}

/* task5 */

function checkNames(string) {
  return string.replaceAll(/(\w+), (\w+)/g, "$2 $1");
}
