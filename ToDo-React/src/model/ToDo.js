import ToDoItem from "./ToDoItem";

class ToDo {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();

        return this.items;
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();

        return this.items;
    }

    changeState(item) {
        item.completed = !item.completed;
        this.saveToLocalStorage();

        return this.items;
    }

    saveToLocalStorage() {
        localStorage.setItem('todo-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage(item) {
        var json = localStorage.getItem('todo-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            if (key === "date") {
                value = new Date(value);
            }
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let toDoItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            toDoItems.push(ToDoItem.fromJSON(jsonParsed[i]));
        }

        return toDoItems;
    }

}
export default ToDo;