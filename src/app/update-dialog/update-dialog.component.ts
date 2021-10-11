import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../todo';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  @Input() t: ITodo;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.t, "object update");
  }

  getUpdateData() {
    console.log(this.t, "data");
  }
}
