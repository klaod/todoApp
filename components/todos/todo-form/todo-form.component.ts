import { Todo } from '../../../shared/todo-model';
import { Component,Output ,EventEmitter,} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
    @Output() created: EventEmitter<Todo>;

    constructor() {
            this.created =  new EventEmitter<Todo>();
    }

    add(title: string): void {
        if (title) {
            let todo  = new Todo(title);
            this.created.emit(todo);
        }
    }

}
