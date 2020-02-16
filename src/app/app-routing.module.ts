import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';


const routes: Routes = [
 { path: 'page/:id', loadChildren: ()=>  import('./views/about/about.module').then(m => m.AboutModule) },
 { path: '', loadChildren: ()=>  import('./views/page/page.module').then(m => m.PageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
