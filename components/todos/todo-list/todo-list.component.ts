import { Itodo } from './../../../shared/todo-model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../../shared/todo-model';
@Component({    
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
    directives: [TodoItemComponent],

})
export class TodoListComponent{
    @Input() todos: Itodo[];
    @Output() toggled: EventEmitter<Itodo>;
    @Output() deleted: EventEmitter<Itodo>;

    constructor(){
        this.toggled = new EventEmitter<Itodo>();
        this.deleted = new EventEmitter<Itodo>();

    }

    onTodoToggled(todo:Itodo): void{
         this.toggled.emit(todo);
    }
    onTodoDeleted(todo: Todo): void{
       this.deleted.emit(todo);
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
