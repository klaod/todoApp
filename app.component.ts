import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Todo } from './components/shared/todo-model';
import { Component } from '@angular/core';
import { TodoService } from './components/shared/todo-service'
import { todos } from './components/shared/todo-data'
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [TodoListComponent,TodoFormComponent],
    providers: [TodoService]
})
export class AppComponent {
    title: string;

    constructor(){
        this.title = "angular to-do";
    }
    
 }
