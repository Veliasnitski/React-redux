var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");
var AppView = require("./appview.jsx");
 
var store = redux.createStore(reducer);
 
store.dispatch({
  type: "SET_STATE",
  state: {
    tasks: [ "Wake Up!", "Run away" ]
  }
});
 
ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById("container")
);