const Worker = {
  init: function () {
    onmessage = this.onMessage.bind(this);
    this.tasks = {};
  },
  addTask: function (task) {
    this.tasks[task.name] = task;
  },
  onMessage: function (e) {
    const name = e.data.name,
      args = e.data.args,
      task = this.tasks[name];
    if (task && task.main) {
      const data = task.main(...args);
      task.postMessage(data);
    }
  },
};

export default Worker;
