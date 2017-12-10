var React = require('react');
var TodoItem = require('TodoItem')

class TodoList extends React.Component {
  render() {
    var {todos} = this.props;
    if (todos.length === 0) {
      return (
        <p className="container__message">
          Nothing To Do
        </p>
      );
    }
    var renderTodos = () => {
       return todos.map((todo) => {
         return (
           <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;
