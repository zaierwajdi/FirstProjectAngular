import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  postId:string;
  post:any={}
  constructor(private route: ActivatedRoute,private crudPoste : CrudService) {
    this.route.params.subscribe(param =>{
      this.postId=param['id'];
    } )
   }

  ngOnInit() {
    this.crudPoste.getPostById(this.postId).subscribe(post=>{
      this.post=post;
    })
  }
  updatePost(){
    this.crudPoste.updatePostById(this.postId,this.post).subscribe(console.log);
  }

}
