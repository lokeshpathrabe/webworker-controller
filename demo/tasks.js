import { Task } from "../src/index.js";

const add = new Task({
  name: "add",
  main: function (num1, num2) {
    return Number.parseInt(num1) + Number.parseInt(num2);
  },
});

const multiply = new Task({
  name: "multiply",
  main: function (num1, num2) {
    return Number.parseInt(num1) * Number.parseInt(num2);
  },
});

const square = new Task({
  name: "square",
  main: function (num1) {
    return Number.parseInt(num1) * Number.parseInt(num1);
  },
});

export { add, multiply, square };
