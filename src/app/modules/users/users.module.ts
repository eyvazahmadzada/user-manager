import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ViewComponent } from './pages/view/view.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderTogglerComponent } from './components/order-toggler/order-toggler.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'view/:id', component: ViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [
    UsersComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    UserCardComponent,
    OrderTogglerComponent
  ],
  exports: [RouterModule]
})
export class UsersModule {}
