import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // Get modal info from parent
  @Input() header: string;

  // Fire an event on modal close
  @Output() onClose = new EventEmitter();

  isOpen: boolean = false;

  ngOnInit() {
    // Animate modal on load
    setTimeout(() => {
      this.isOpen = true;
    });
  }

  onModalClose() {
    this.isOpen = false;
    this.onClose.emit();
  }
}
