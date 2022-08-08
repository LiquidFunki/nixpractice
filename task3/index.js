/* task1 */

function isEven(x) {
  if ((x & 1) == 0) {
    return true;
  } else {
    return false;
  }
}

/* task2 */

function testString(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let x = str[i];

    if (x == "(" || x == "[" || x == "{") {
      arr.push(x);
      continue;
    }

    if (arr.length == 0) return false;

    let checker;
    switch (x) {
      case ")":
        checker = arr.pop();
        if (checker == "{" || checker == "[") return false;
        break;

      case "}":
        checker = arr.pop();
        if (checker == "(" || checker == "[") return false;
        break;

      case "]":
        checker = arr.pop();
        if (checker == "(" || checker == "{") return false;
        break;
    }
  }

  return arr.length == 0;
}

/* task3 */

class circleArray {
  constructor() {
    this.arr = [];
  }

  add(value) {
    this.arr.push(value);
  }

  get(index) {
    if (index > this.arr.length - 1) {
      let bebra = index - this.arr.length;
      return this.arr[bebra];
    } else if (index < this.arr.length - 1) {
      let bebra2 = this.arr.length - -index;
      return this.arr[bebra2];
    } else {
      return this.arr[index];
    }
  }
}

/* task4 */

function drawRectangle() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.fillRect(25, 25, 100, 100);
  }
}

function drawTriangle() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

/* task5 */

function substrCount(input, needle, offset, length) {
    let newLength = offset + length;
    let str = input.slice(offset, newLength);
    return str.split(needle).length - 1;
 }
