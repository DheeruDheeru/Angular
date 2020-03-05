import { Injectable } from '@angular/core';
import{ HttpClientModule , HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/Model/Todo';
import { Observable } from 'rxjs';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit='?_limit=8';
  
  constructor(private http:HttpClient) { }

  //get
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

  //completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // toggleDeleted(todo:Todo):Observable<any>{
  //   const url = `${this.todosUrl}/${todo.id}`;
  //   return this.http.delete(url, todo, httpOptions);
  // }
}
