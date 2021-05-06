import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AsPipe } from './pipes/as.pipe';

@NgModule({
  imports: [CommonModule, ClickOutsideModule, FormsModule],
  declarations: [
    DropdownComponent,
    SearchBarComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    SpinnerComponent,
    AsPipe
  ],
  exports: [
    DropdownComponent,
    SearchBarComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    SpinnerComponent,
    AsPipe,
    CommonModule,
    ClickOutsideModule,
    FormsModule
  ]
})
export class SharedModule {}
