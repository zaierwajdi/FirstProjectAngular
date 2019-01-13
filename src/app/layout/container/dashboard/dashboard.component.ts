import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  results: any = [];
  constructor(private postCrud:CrudService) { }

  ngOnInit() {
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
    // this.http.get('http://localhost:3000/posts').subscribe(data=>{
     this.getAll();
  }

  getAll(){
    this.postCrud.getAllPost().subscribe(data=>{
      this.results=data;

})
  }

  delete(id){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your post has been deleted!", {
          icon: "success",
        });
        this.postCrud.deletePostById(id).subscribe(data=>{
          console.log(data)
          this.getAll();
    })
      } else {
        swal("Your post  is safe!");
      }
    });
  

  }

}
