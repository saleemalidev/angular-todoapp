import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  POST_URL="https://jsonplaceholder.typicode.com/posts"

  postList:any = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.dataService.get(this.POST_URL).subscribe((data: any[]) => {
      console.log(data);
      this.postList = data;
    });
  }

}
