import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidevarComponent } from './components/sidevar/sidevar.component';

import { AngulaMaterialModule } from '../AngularMaterial/AngulaMaterial/AngulaMaterial.module';
import { LayaoutComponent } from './pages/layaout/layaout.component';
import { TodoListRoutingModule } from './TodoList-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PRIMENGModule } from '../PRIMENG/PRIMENG/PRIMENG.module';



@NgModule({
  imports: [
    CommonModule,RouterModule,AngulaMaterialModule,ReactiveFormsModule,FormsModule,SharedModule,PRIMENGModule
  ],
  exports: [TodoListRoutingModule,SidevarComponent,LayaoutComponent],
  declarations: [SidevarComponent,LayaoutComponent]
})
export class TodoListModule { }
