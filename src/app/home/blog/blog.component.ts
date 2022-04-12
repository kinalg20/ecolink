import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 slug:any;
 getBlog:any=[];
  constructor(private route: ActivatedRoute, public __apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.queryParams;
    setTimeout(() => {
      console.log(this.slug);
    }, 500);

    this.__apiService.getBlog(this.slug).subscribe(res=>{
      this.getBlog.push(res);
      setTimeout(() => {
        console.log(this.getBlog);
      }, 500);
    })
  }

}
