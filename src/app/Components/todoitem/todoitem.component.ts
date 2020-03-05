import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/Model/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo:Todo;

  constructor() { }

  ngOnInit(): void {
  }

  //set Dynamic classes
  setClasses(){
    let classes = {
      todo:true,
      'is-complete': this.todo.completed,
      'is-delete': this.todo.deleted
    }

    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
  }

  onDelete(todo){
    todo.deleted = !todo.deleted;
  }

}
