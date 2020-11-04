import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../todo-data.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todo_list:any;

  constructor(private todoServ:TodoDataService) { }

  deleteItem(index){
    this.todoServ.deleteTodo(index);
  }

  ngOnInit(): void {
    this.todo_list=this.todoServ.todolist
  }

}
