import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {
  locatVar="https://apolitical.co/wp-content/themes/apolitical/public/img/front-page/ida-auken-quote.jpg"
  btnStatus:boolean=false;
  username:string="jour formation"
  name:string;
  email:string;
  phone:number;
  about:string;

  counter:number=0
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
    ];
    
      constructor() { }

      decrement(){
        this.counter=this.counter-1;
    
        if (this.counter==-1) {
          this.counter=0;
        }
      }
    
      increment(){
        this.counter=this.counter+1;
      }
    
      valider(){
        let data={
          "name":this.name,
          "email":this.email,
          "phone":this.phone,
          "about":this.about
        }
        console.log(data)
      }

  ngOnInit() {
  }

}
