import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../todo-data.service'

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  title:string;
  description: string;
  item_date:Date;
  todoObject:any;

  constructor(private todoServ:TodoDataService) {
    this.title='';
    this.description='';
    this.item_date=new Date();
  }

  ngOnInit(): void {
  }

  addItem(event){
    this.todoObject={
      id:this.todoServ.idfunc(),
      title:this.title,
      description:this.description,
      item_date:this.item_date,
    }
    this.todoServ.createTodo(this.todoObject)
    this.title='';
    this.description='';
    event.preventDefault();
  }


}
