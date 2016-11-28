import { Itodo } from './todo-model';
import { Injectable } from '@angular/core';
import { todos } from './todo-data';


@Injectable()
export  class TodoService {
    
    getTodos(): Promise<Itodo[]> {
        return new Promise(resolve => setTimeout(() => resolve(todos), 1000));
    }

    addTodo(todo: Itodo): void {
        todos.push(todo);
    }

    deleteTodo(todo: Itodo): void {
        let index = todos.indexOf(todo);
        if (index != -1) {
            todos.splice(index,1);
        }
    }
}