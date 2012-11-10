// Generated by CoffeeScript 1.4.0
(function() {
  var addItem, clearInput, keyDetected, pubberInit, todo, todoRemove;

  console.log('console init');

  addItem = function() {
    var todoList, todoListingTpl, todoTpl, todoValue;
    todoValue = document.getElementById('new-todo').value;
    todoListingTpl = ich.todoItemTpl(todoValue);
    todoList = document.getElementById('todo-list');
    todoValue = $('#new-todo').val();
    todoList = $('#todo-list');
    todoTpl = ich.todoItemTpl({
      todoText: todoValue
    });
    return $(todoList).append(todoTpl);
  };

  clearInput = function() {
    return $('#new-todo').val('');
  };

  todoRemove = function() {
    return $('#todo-list').on('click', '.destroy', function(e) {
      console.log($(e.target).parent().parent());
      return $(e.target).parent().parent().remove();
    });
  };

  todoRemove();

  pubberInit = function() {
    return app.pubber('newItem', addItem());
  };

  keyDetected = function(event) {
    if (event.keyCode === 13) {
      return addItem() && clearInput();
    }
  };

  todo = document.getElementById('new-todo');

  todo.addEventListener('keypress', keyDetected);

}).call(this);