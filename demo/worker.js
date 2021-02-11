import { Worker } from "../src/index.js";
import { add, multiply, square } from "./tasks.js";

Worker.init();

Worker.addTask(add);
Worker.addTask(multiply);
Worker.addTask(square);
