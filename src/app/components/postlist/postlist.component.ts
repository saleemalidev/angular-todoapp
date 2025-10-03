import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
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
export class PostlistComponent implements OnInit {

  POST_URL="https://jsonplaceholder.typicode.com/posts"

  postList:any = [];
  isLoading: boolean = true;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.dataService.get(this.POST_URL)
     .pipe(
      delay(1000) // ⏳ delay for 3 seconds
    )
    .subscribe((data: any[]) => {
      this.postList = data;
      this.isLoading = false;
    });
  }

}
