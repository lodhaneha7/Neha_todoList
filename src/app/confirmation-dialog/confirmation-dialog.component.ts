import { NgRedux } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../store';
import {REMOVE_TODO } from '../actions';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  @Input() t: object;

  constructor(private activeModal: NgbActiveModal,private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    console.log(this.t,"todo_dt");
  }

  public decline() {
    this.activeModal.close(false);
  }


  public dismiss() {
    this.activeModal.dismiss();
  }
  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
    this.activeModal.close(true);
  } 
}
