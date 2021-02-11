/**
 *
 * @param conf
 * conf object must have a 'name' for task and 'main' function that will be executed by worker
 *
 * conf = {
 *  name: 'inSyncWorkerTask',
 *  main: function(){
 *          //Task here
 *        }
 * }
 */
export default function Task(conf) {
  var self = this;
  if (!("name" in conf && "main" in conf)) {
    throw "Task must have a Name and Main method";
  }
  Object.keys(conf).forEach(function (k) {
    self[k] = conf[k];
  });
  self.postMessage = function (data) {
    postMessage({
      name: self.name,
      data: data,
    });
  };
  return self;
}
