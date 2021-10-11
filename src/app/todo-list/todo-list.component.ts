import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, UPDATE_TODOS, LOCAL_STORAGE } from '../actions';
import { ITodo } from '../todo';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  @select() todos;
  date: NgbDateStruct;
  model: ITodo = {
    id: 0,
    date: '',
    task: '',
    status: 'active',
    // isCompleted: false,
  };


  constructor(private ngRedux: NgRedux<IAppState>, private confirmationDialogService: ConfirmationDialogService, private modalService: NgbModal) {
 
  }

  ngOnInit() {
    this.ngRedux.dispatch({ type: LOCAL_STORAGE, todo: this.model });
  }

  onSubmit() {
    console.log(this.model);
    
    this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }



  updateTodo(todo) {
    console.log(todo);
    this.ngRedux.dispatch({ type: UPDATE_TODOS, todo: todo });
  }


  public openConfirmationDialog(t) {
    console.log(t,"popup delete");
    this.confirmationDialogService.confirm(t,'Please confirm..', 'Do you really want to delete ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  open(t) {
    // const modalRef = this.modalService.open(UpdateDialogComponent,{ size: 'lg' });
    // modalRef.componentInstance.t = t;
    // console.log(modalRef.result)
    // return modalRef.result;
  console.log(t);
   console.log(this.model);

  }

 
}
