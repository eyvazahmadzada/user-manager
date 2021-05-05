import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';

import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, ClickOutsideModule],
  declarations: [
    DropdownComponent,
    SearchBarComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    FormGroupComponent
  ],
  exports: [
    DropdownComponent,
    SearchBarComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    FormGroupComponent,
    CommonModule,
    HttpClientModule,
    ClickOutsideModule
  ]
})
export class SharedModule {}
