import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormGroup } from '../../models/form-group.model';
import formGroupsData from '../../data/form-groups';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit, OnDestroy {
  // Number of avatar images
  avatars: number = 12;
  selectedAvatarId: number;

  // Modal state
  isModalOpen: boolean = false;

  formGroups: FormGroup[] = formGroupsData;

  constructor(private location: Location) {}

  ngOnInit() {
    // Animate modal on load
    setTimeout(() => (this.isModalOpen = true));
  }

  navigateBack() {
    this.location.back();
  }

  onSetSelected(id: number) {
    this.selectedAvatarId = id;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnDestroy() {
    this.isModalOpen = false;
  }
}
