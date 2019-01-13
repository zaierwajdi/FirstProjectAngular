import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {

  titre:string;
  description: string;
  typeContrat:string;
  salaire:string;

  constructor(private postCrud:CrudService) { }

  valider(){
    let data={
      "title":this.titre,
      "description":this.description,
      "contract_type":this.typeContrat,
      "salaire":this.salaire
    }
    this.postCrud.createPost(data).subscribe(Response => console.log(Response))
    //this.http.post("http://localhost:3000/posts",data).subscribe(Response => console.log(Response))
  }

  ngOnInit() {
  }

}
