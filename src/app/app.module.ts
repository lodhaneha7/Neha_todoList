import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IAppState, rootReducer, INIT_STATE } from './store'

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component'
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service'
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgReduxModule,NgbPaginationModule, NgbAlertModule,NgbModule ],
  declarations: [ AppComponent, TodoListComponent,ConfirmationDialogComponent, UpdateDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ConfirmationDialogService ],
  entryComponents: [ ConfirmationDialogComponent ],

})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INIT_STATE)
  }
}
