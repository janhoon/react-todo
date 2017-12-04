var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');

$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
