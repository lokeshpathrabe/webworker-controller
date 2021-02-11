/**
 * Global object to manage web worker tasks. To create a new task
 * 
 * ----In worker.js----
 * var new_task = new Task({name: 'task_name', main: function(){
 *      //main task logic 
 * }})
 * Worker.addTask(new_task)
 * 
 * ----Register the task to run it whereever required----
 * Controller.executeWorkerTask('task_name', [param1, param2], function(data){
                // listener function called when message is posted from task 
            });
 */
const Controller = {
  init: function (path) {
    this.worker = new Worker(path, { type: "module" });
    this.worker.onmessage = this.messageListener;
    this.worker.onerror = this.onError;
    this.listeners = {};
    this.tasks = [];
  },
  getWorker: function () {
    return this.worker;
  },
  getTasks: function () {
    return this.tasks;
  },
  executeWorkerTask: function (taskName, taskArgs, taskListener) {
    var args = {
      name: taskName,
      args: taskArgs,
    };
    this.worker.postMessage(args);
    this.tasks.push(taskName);
    if (taskListener) {
      this.listeners[taskName] = taskListener;
    }
  },
  messageListener: function (e) {
    var self = Controller;
    var name = e.data.name;
    var data = e.data.data;
    if (self.listeners[name]) {
      self.listeners[name](data);
    }
  },
  terminateWorker: function () {
    this.worker.terminate();
  },
  onError: function (err) {
    console.error(err.message, err);
  },
};

export default Controller;
