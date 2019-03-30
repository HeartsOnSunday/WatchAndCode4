var todoList = {
    todos: [], //todos Array

    displaytd: function() {

           if (this.todos.length === []) {
               console.log("Your To Do List is Empty!");
           } else {
            console.log("My ToDos: "); 
            for (var i = 1; i < this.todos.length; i++)  {
           
           //checkif .completed is true
           if (this.todos[i].completed === true) {
                //print w (x)
                console.log(i, '(X)', this.todos[i].todoText);

           } else {
               //print w ()
               console.log(i, '( )', this.todos[i].todoText);
           }
        }
    }

},


    addtd: function(tdText) {
        this.todos.push({
            tdText: tdText,
            completed: false,
        });  //adding to array
        this.displaytd();
},

    changetd: function(index, tdText) {
       // this.todos[index] = newtd; //identify and change todos by index
       this.todos[index].tdText = tdText; 
       this.displaytd();
},

    deletetd: function(index) {
    this.todos.splice(index, 1); //remove todo w/ splice (index, Qt);
    this.displaytd();
},
    toggleCompletedtd: function(index) {
        var todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displaytd();

    }



};


