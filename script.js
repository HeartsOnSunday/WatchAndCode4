var todoList = {
    todos: [], //todos Array

    displaytd: function() {
        console.log("My ToDos", this.todos); //displaying
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

{
    todoText: 'item_1',
}
