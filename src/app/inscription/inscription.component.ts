import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  myform: FormGroup;
  constructor() { }

  ngOnInit() {

    this.myform = new FormGroup({
      nameForm : new FormControl('',Validators.required),
      mailForm:new FormControl('',[Validators.required,Validators.email]),
      pwdForm: new FormControl('',[Validators.required,Validators.minLength(8)]),
    })
  }

}
