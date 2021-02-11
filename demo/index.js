import { Controller } from "../src/index.js";

(function () {
  Controller.init("/demo/worker.js");
  Controller.executeWorkerTask("add", [4, 2], function (data) {
    console.log("Add result", data);
  });

  Controller.executeWorkerTask("multiply", [4, 2], function (data) {
    console.log("multiply", data);
  });

  Controller.executeWorkerTask("square", [8], function (data) {
    console.log("square", data);
  });
})();
