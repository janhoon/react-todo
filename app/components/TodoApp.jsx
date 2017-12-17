var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">TodoApp</h1>
        <div className="grid-x align-center">
          <div className="cell small-11 medium-8 large-6">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

module.exports = TodoApp;
