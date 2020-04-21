import { observable, action } from 'mobx';

class ListStore {
    /**
     * {
     *  task: String,
     *  complete: Boolean, Default: false
     *  order: Number
     * }
     */
    @observable todos = [];
    
    @action changeTask({task, order}) {
        this.todos[order - 1]['task'] = task;
    }

    @action toggleComplete({order}) {
        this.todos[order - 1]['complete'] = !this.todos[order - 1]['complete'];
    }

    @action addTodo() {
        this.todos.push({
            task: "",
            complete: false,
            order: this.todos.length + 1
        });
    }


    @action deleteTodo({order}) {
        this.todos.splice(order - 1, 1);
    }

    @action clear() {
        this.todos = [];
    }
}

export default new ListStore()