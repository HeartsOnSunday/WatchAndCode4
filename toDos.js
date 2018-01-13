var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText);
            
            //check if .completed is true
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
               console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    
    changeTodo: function(position, todoText) {
       this.todos[position].todoText = todoText;
       this.displayTodos();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    
    toggleCompleted: function(position) {
        var todo = this.todo[position];
        todo.completed = !todo.completed;
        this.displayToDos();
    },
    
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //Get Number of Completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // Case 1: if all true, make all false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
            //Case 2: Otherwise make all true.
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed === true;
            }
        }
        
        this.displayTodos();
    }

};


    var handlers = {
        toggleAll: function() {
            todoList.toggleAll();
        },
        addTodo: function(){
            var addTodoTextInput = document.getElementById('addTodoTextInput');
            todoList.addTodo(addTodoTextInput.value);
            addTodoTextInput.value = '';
            view.displayTodos();
        },
        changeTodo: function() {
            var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
            var changeTodoTextInput = document.getElementById('changeTodoTextInput');
            todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
            changeTodoPositionInput = '';
            changeTodoTextInput.value = '';
            view.displayTodos();
        },
        deleteTodo: function() {
            var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
            todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
            deleteTodoPositionInput.value = '';
            view.displayTodos();
        },
        toggleCompleted: function() {
            var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
            todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
            toggleCompletedPositionInput.value = '';
            view.displayTodos();
        },
        toggleAll: function() {
            todoList.toggleAll();
            view.displayTodos();
        }
    };
    
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i]; 
            var todoTextWithCompletion = '';
                if (todo.completed === true) {
                    todoTextWithCompletion = '(x)' + todo.todoText;
                } else {
                    todoTextWithCompletion = '( )' + todo.todoText;
                }
                
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
    







