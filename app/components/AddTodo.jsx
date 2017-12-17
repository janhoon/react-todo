var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class AddTodo extends React.Component {
  constructor (){
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(text));
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Add a new todo item."/>
          <button className="button expanded">
            Submit
          </button>
        </form>
      </div>
    );
  }
};

module.exports = connect()(AddTodo);
