import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../todo-data.service'

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo_details:any

  constructor(private todoServ:TodoDataService) { }

  ngOnInit(): void {
    this.todo_details=this.todoServ.todolist
  }

}
