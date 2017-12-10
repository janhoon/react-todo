var React = require('react');

class AddTodo extends React.Component {
  constructor (){
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var text = this.refs.todoText.value;
    if (text.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
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

module.exports = AddTodo;
