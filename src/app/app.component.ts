import {Component, OnInit} from '@angular/core';
import {TodoListService} from './services/todo-list.service';
import {Todo} from './model/todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  todoList: Todo[] = [];

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.todoListService.getTodoList().subscribe(todo => {
      console.log(todo);
      this.todoList = todo;
    });
    this.todoListService.getTodoListById(2).subscribe(todo => console.log(todo));
  }
}
