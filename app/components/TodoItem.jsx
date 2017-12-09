var React = require('react');

class TodoItem extends React.Component {
  constructor() {
    super();

    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle() {
    this.props.onToggle(this.props.id);
  };

  render() {
    var {id, text, completed} = this.props;

    return (
      <label>
        <input type="checkbox" checked={completed} onChange={this.handleToggle}/>
        {text}
      </label>
    );
  };
};

module.exports = TodoItem;
