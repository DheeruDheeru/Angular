import { Injectable } from '@angular/core';
import{ HttpClientModule , HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/Model/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit='?_limit=10';
  
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    // return [
    //   {
    //     id:1,
    //     name:'Item 1',
    //     completed:false,
    //     deleted:false
    //   },
    //   {
    //     id:1,
    //     name:'Item 2',
    //     completed:false,
    //     deleted:false
    //   },
    //   {
    //     id:3,
    //     name:'Item 3',
    //     completed:false,
    //     deleted:false
    //   }
    // ];
  }
}
