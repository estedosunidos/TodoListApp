import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../interfaces/task.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoAppService } from '../../services/TodoApp.service';

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.css']
})
export class SidevarComponent implements OnInit {


  constructor(private TodoAppService: TodoAppService) {}

  ngOnInit() {

  }




}
