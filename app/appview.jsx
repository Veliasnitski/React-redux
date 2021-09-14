var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.jsx");
  
class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.taskInput = React.createRef();
  }
  onClick() {
    if (this.taskInput.current.value !== "") {
 
      var itemText = this.taskInput.current.value;
      this.taskInput.current.value ="";
      return this.props.addTask(itemText);
    }
  }
  render() {
    return <div>
            <input ref={this.taskInput} />
            <button onClick = {this.onClick.bind(this)}>Add Task</button>
        </div>
  }
};
  
class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      
    return <div>
                <p>
                    <b>{this.props.text}</b><br />
                    <button onClick={() => this.props.deleteTask(this.props.text)}>Delete</button> 
                </p>
            </div>
  }
};
  
class TasksList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
        {this.props.tasks.map(item =>
          <TaskItem key={item}
                    text={item}
                    deleteTask={this.props.deleteTask}/>
        )}
      </div>
  }
};
  
class AppView extends React.Component {
  
    render() {
        return <div>
            <TaskForm addTask={this.props.addTask}/>
            <TasksList {...this.props} />
    </div>
  }
};
  
function mapStateToProps(state) {
  return {
    tasks: state.get("tasks")
  };
}
  
module.exports = connect(mapStateToProps, actions)(AppView);