import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './pages/layaout/layaout.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';


const routes: Routes = [
  {
    path:'' ,
    component: SidevarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  TodoListRoutingModule { }
