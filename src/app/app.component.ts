import { Component } from '@angular/core';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Bonjour c'est wajdi";

  eventfn(){
    alert("hello jamel")
  }
}
