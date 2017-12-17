var React = require('react');
var {connect} = require('react-redux');
var TodoItem = require('TodoItem');
var TodoAPI = require('TodoAPI');

class TodoList extends React.Component {
  render() {
    var {todos, showCompleted, searchText} = this.props;
    if (todos.length === 0) {
      return (
        <p className="container__message">
          Nothing To Do
        </p>
      );
    }
    var renderTodos = () => {
       return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
         return (
           <TodoItem key={todo.id} {...todo}/>
         );
       });
    };

    return (
      <div>
         {renderTodos()}
      </div>
    );
  }
};

module.exports = connect(
  (state) => {
    return state;
  }
)(TodoList);
