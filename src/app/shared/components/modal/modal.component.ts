import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  // Get modal info from parent
  @Input() header: string;
  @Input() isOpen: boolean;

  // Fire an event on modal close
  @Output() onClose = new EventEmitter();

  // A variable for performing animation effects
  open: boolean = false;

  ngOnInit() {
    this.open = this.isOpen;
  }

  ngOnChanges(changes: SimpleChanges) {
    // Update open state whenever it gets changed by parent
    this.open = changes.isOpen.currentValue;
  }

  onModalClose() {
    // Animate modal on destroy
    this.open = false;
    setTimeout(() => {
      this.onClose.emit();
    }, 400);
  }
}
