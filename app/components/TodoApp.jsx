var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

class TodoApp extends React.Component {
  constructor() {
    super();
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
      ],
      showCompleted: false,
      searchText: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  };

  handleAddTodo(text) {
    alert("New Todo: " + text);
  };

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  };
};

module.exports = TodoApp;
