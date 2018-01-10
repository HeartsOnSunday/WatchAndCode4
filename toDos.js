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
        this.displayToDos();
    },
    
    toggleCompleted: function(position){
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

//Button
    var displayTodosButton = document.getElementById('displayTodosButton');
//ToggleAllButton
    var toggleAllButton = document.getElementById('toggleAllButton');
    
    
    
//run the display todos method onclick
    displayTodosButton.addEventListener('click', function() {
       todoList.displayTodos(); 
    });
    
    toggleAllButton.addEventListener('click', function() {
        todoList.toggleAll();
    })
    







