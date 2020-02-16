import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  products :any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('./assets/data/products.json')
    .subscribe(responce => {
         this.products = responce;
         console.log(responce);
    })
  }

}
