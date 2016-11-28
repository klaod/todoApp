import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo-model';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();

    toggleDone(){
        this.todo.done = !this.todo.done;
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}
