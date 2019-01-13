import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url: string="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  createPost(data){
    return this.http.post(this.url + "posts", data);
  }

  getAllPost(){
    return this.http.get(this.url + "posts");
  }

  getPostById( id){
    return this.http.get(this.url + "post/" + id);
  }

  updatePostById(id,data){
    return this.http.put(this.url + "post/" + id, data);
  }

  deletePostById(id){
    return this.http.delete(this.url + "post/" + id);
  }
}
