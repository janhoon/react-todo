var React = require('react');
var moment = require('moment');

class TodoItem extends React.Component {
  constructor() {
    super();

    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle() {
    this.props.onToggle(this.props.id);
  };

  render() {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
      <label>
        <input type="checkbox" checked={completed} onChange={this.handleToggle}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </label>
    );
  };
};

module.exports = TodoItem;
