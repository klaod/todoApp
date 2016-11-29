import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../shared/todo-model';
 import {TodoService} from '../../shared/todo-service';
@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css'],
    directives: [TodoFormComponent,TodoListComponent]
})
export class TodosComponent implements OnInit{
    todos: Itodo[];
    todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todos = [];
        this.todoService = todoService;
    }

    ngOnInit() {
        this.todoService.getTodos().then(todos => this.todos = todos);

    }

    onTodoCreated(todo: Itodo): void {
        this.todoService.addTodo(todo).then(todo => this.addTodo(todo));
    }

    onTodoToggled(todo: Itodo): void {
        this.todoService.saveTodo(todo).then(todo => {});
    }

    onTodoDeleted(todo: Itodo): void {
        
        this.todoService.deleteTodo(todo).then(todo => this.deleteTodo(todo));
    }

    private addTodo(todo: Itodo): void {
        this.todos.push(todo);
    }
    
    private deleteTodo(todo: Itodo): void {
        let index = this.todos.indexOf(todo);

        if(index > -1) {
            this.todos.splice(index, 1);
        }
    }
 }
