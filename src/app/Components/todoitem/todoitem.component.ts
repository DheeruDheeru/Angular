import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/Model/Todo';
import { TodoService } from '../../servies/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo:Todo;

  constructor(private TodoService:TodoService) { }

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
    // toggle on UI
    todo.completed = !todo.completed;
    // toggle on server
    this.TodoService.toggleCompleted(todo).subscribe(todo=>
        console.log(todo));
  }

  onDelete(todo){
    // toggle on UI
    todo.deleted = !todo.deleted;
    // toggle on server
    // this.TodoService.toggleDeleted(todo).subscribe(todo=>
    //     console.log(todo)
    //   );
  }

}
