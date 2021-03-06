import { Injectable } from '@angular/core';
import { ITaskTemplate } from '../shared/model/ITaskTemplate';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  getTodoList() {
    let todoListStorage: ITaskTemplate[] = JSON.parse(sessionStorage.getItem('todoList'));
    return todoListStorage;
  }

  postTodoList(listTodo) {
    sessionStorage.setItem('todoList', JSON.stringify(listTodo));
  }

  fadeOut(el) {
    el.style.transition = '0.5s';
    el.style.opacity = 0;
  }

  getRoute(path) {
    return window.location.pathname === path;
  }
}
