import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  Products = [];
  addProductFrom = new FormGroup({
    name:new FormControl('Product',Validators.required),
    email:new FormControl('email',[Validators.required,Validators.email]),
    prize:new FormControl('',Validators.required)
  }

  );

  @Output() added = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    this.Products.push(this.addProductFrom.value);
    this.added.emit(this.addProductFrom.value);
    
  }

}
