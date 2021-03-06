import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  {
    path : '', 
    children :[
      { path: 'index', component: IndexComponent },
      { path: ':productId/view', component: ViewComponent },
      { path: 'create', component: CreateComponent },
      { path: ':productId/edit', component: EditComponent } 
    ]

  }
  
 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }