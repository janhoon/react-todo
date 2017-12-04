var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog.'
        }, {
          id: 2,
          text: 'Feed the cat.'
        }, {
          id: 3,
          text: 'Clean the pool.'
        }, {
          id: 4,
          text: 'Love the girl.'
        }
      ]
    };
  }

  handleAddTodo(text) {
    alert("New Todo: " + text);
  }

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
};

module.exports = TodoApp;
