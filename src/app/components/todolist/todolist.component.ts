import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding changes
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [   // 100ms delay between each item
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class TodolistComponent implements OnInit {

  TODO_URL="https://jsonplaceholder.typicode.com/todos"

  todoList:any = [];
  isLoading: boolean = true;
    constructor(private dataService:DataService) { }
  
    ngOnInit(): void {
      this.getTodos();
    }
  
    getTodos(){
      this.dataService.get(this.TODO_URL)
       .pipe(
            delay(1000) // ⏳ delay for 3 seconds
          )
      .subscribe((data: any[]) => {
        this.todoList = data;
        this.isLoading = false;
      });
    }

}
