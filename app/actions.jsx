var addTask = function (task) {
  return {
    type: "ADD_TASK",
    task
  }
};
var deleteTask = function (task) {
  return {
    type: "DELETE_TASK",
    task
  }
};
 
module.exports = {addTask, deleteTask};