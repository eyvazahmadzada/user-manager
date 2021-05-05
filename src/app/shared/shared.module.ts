import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, ClickOutsideModule, FormsModule],
  declarations: [
    DropdownComponent,
    SearchBarComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    SpinnerComponent
  ],
  exports: [
    DropdownComponent,
    SearchBarComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    SpinnerComponent,
    CommonModule,
    HttpClientModule,
    ClickOutsideModule,
    FormsModule
  ]
})
export class SharedModule {}
