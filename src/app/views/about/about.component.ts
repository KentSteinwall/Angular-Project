import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(params =>{
      console.log(params);
    });
  }

}
