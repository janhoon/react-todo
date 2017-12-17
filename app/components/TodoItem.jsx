var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

class TodoItem extends React.Component {
  constructor() {
    super();

    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle() {
    this.props.onToggle(this.props.id);
  };

  render() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created: ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed: ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    }

    return (
      <label className={todoClassName}>
        <div>
          <input type="checkbox" checked={completed} onChange={() => {
            dispatch(actions.toggleTodo(id));
          }}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </label>
    );
  };
};

module.exports = connect()(TodoItem);
