"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var todo_item_component_1 = require('../todo-item/todo-item.component');
var core_1 = require('@angular/core');
var todo_service_1 = require('../shared/todo-service');
var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    TodoListComponent.prototype.onTodoDeleted = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    Object.defineProperty(TodoListComponent.prototype, "sortedTodos", {
        get: function () {
            return this.todos.map(function (todo) { return todo; })
                .sort(function (a, b) {
                if (a.title > b.title)
                    return 1;
                else if (a.title < b.title)
                    return -1;
                else
                    return 0;
            })
                .sort(function (a, b) {
                if (a.done && !b.done)
                    return 1;
                else if (!a.done && b.done)
                    return -1;
                else
                    return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    TodoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-list',
            templateUrl: 'todo-list.component.html',
            styleUrls: ['todo-list.component.css'],
            directives: [todo_item_component_1.TodoItemComponent],
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map