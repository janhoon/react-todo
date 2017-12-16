var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State:', store.getState());
});

store.dispatch(actions.addTodo('Go for a run'));
store.dispatch(actions.setSearchText('run'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
