import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { Page1Component } from '../page1/page1.component';
import {MatInputModule} from '@angular/material/input';
import { FormComponent } from '../form/form.component';



const routes:Routes = [
  { path: '' , component:PageComponent },
  { path: 'page1' , component:Page1Component },
  { path: 'form' , component:FormComponent }
  
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule
  ]
})
export class PageModule { }
