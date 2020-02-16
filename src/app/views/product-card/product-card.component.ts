import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnChanges {
  @Input() product:any;
  ngOnChanges(): void {
    
  }

  constructor() { }

 

}
