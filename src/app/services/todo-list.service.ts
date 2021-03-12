import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private httpClient: HttpClient) {
  }

  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoListById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
