import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo-model';
import { Itodo } from './../shared/todo-model';
import {TodoService} from '../shared/todo-service';
@Component({    
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
    directives: [TodoItemComponent],

})
export class TodoListComponent implements OnInit{
    todos: Itodo[];

    constructor(private todoService: TodoService){
        this.todos = [];

    }

    ngOnInit() {
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    onTodoDeleted(todo: Todo): void{
        this.todoService.deleteTodo(todo);
    }
    get sortedTodos(): Itodo[]{

        return this.todos.map((todo: Itodo) => todo)
            .sort((a, b) => {
                if(a.title > b.title) return 1;
                else if(a.title < b.title) return -1
                else return 0;
            })
            .sort((a, b) => {
                if(a.done && !b.done) return 1;
                else if(!a.done && b.done) return -1;
                else return 0;
            })

    }

}
