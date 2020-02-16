import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from '../page1/page1.component';

const routes:Routes = [
{ path: '' , component:AboutComponent },
{ path: 'page1' , component:Page1Component }

];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
