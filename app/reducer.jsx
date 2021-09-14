var Map = require("immutable").Map;
 
var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
    case "ADD_TASK":
        return state.update("tasks", (tasks) => tasks.push(action.task));
    case "DELETE_TASK":
        return state.update("tasks",
            (tasks) => tasks.filterNot(
                (item) => item === action.task
            )
        );
  }
  return state;
}
module.exports = reducer;