module.exports = {
  setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

  },

  getTodos() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (err) {

    }

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  },

  filterTodos(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    if (searchText != '') {
      var searchTextLowerCase = searchText.toLowerCase();
      filteredTodos = filteredTodos.filter((todo) => {
        var todoLowerCase = todo.text.toLowerCase();
        if (todoLowerCase.includes(searchTextLowerCase)) {
          return true;
        } else {
          return false;
        }
      });
    }

    //Sort by non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })

    return filteredTodos;
  }
};
