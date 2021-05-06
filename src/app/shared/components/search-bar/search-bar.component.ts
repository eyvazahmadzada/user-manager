import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  // Store search keyword
  searchKeyword: string = '';

  @Output() onChange = new EventEmitter<string>();

  onInputChange(event: any) {
    // Remove spaces from string and store to searchKeyword
    this.searchKeyword = event.target.value.trim();

    // Send keyword to parent component
    this.onChange.emit(this.searchKeyword);
  }

  onClearInput() {
    this.searchKeyword = '';

    this.onChange.emit(this.searchKeyword);
  }
}
