var todoList = {
    todo = ["item_1", "item_2", "item_3", "item_4"], //todos Array

}
function displaytd() {

Console.log("My ToDos", todo); //displaying
}

function addtd(x) {
todo.push(x);  //adding to array
displaytd();
}

function changetd(x, newtd) {
todo[x] = newtd; //identify and change todos by index
displaytd();
}

function deletetd () {
todo.splice(x,y); //remove todo w/ splice (index, Qt);
displaytd();
}