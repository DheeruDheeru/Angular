import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {
        id:1,
        name:'Item 1',
        completed:false,
        deleted:false
      },
      {
        id:1,
        name:'Item 2',
        completed:false,
        deleted:false
      },
      {
        id:3,
        name:'Item 3',
        completed:false,
        deleted:false
      }
    ];
  }
}
