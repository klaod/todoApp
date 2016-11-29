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
var todo_list_component_1 = require('./todo-list/todo-list.component');
var todo_form_component_1 = require('./todo-form/todo-form.component');
var core_1 = require('@angular/core');
var todo_service_1 = require('../../shared/todo-service');
var TodosComponent = (function () {
    function TodosComponent(todoService) {
        this.todos = [];
        this.todoService = todoService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    TodosComponent.prototype.onTodoCreated = function (todo) {
        var _this = this;
        this.todoService.addTodo(todo).then(function (todo) { return _this.addTodo(todo); });
    };
    TodosComponent.prototype.onTodoToggled = function (todo) {
        this.todoService.saveTodo(todo).then(function (todo) { });
    };
    TodosComponent.prototype.onTodoDeleted = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo).then(function (todo) { return _this.deleteTodo(todo); });
    };
    TodosComponent.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'todos.component.html',
            styleUrls: ['todos.component.css'],
            directives: [todo_form_component_1.TodoFormComponent, todo_list_component_1.TodoListComponent]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map