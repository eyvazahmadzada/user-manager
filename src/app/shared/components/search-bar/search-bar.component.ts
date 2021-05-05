import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  // Store search keyword
  searchKeyword: string = '';

  onInputChange(event: any) {
    // Remove spaces from string and store to searchKeyword
    this.searchKeyword = event.target.value.trim();
  }

  onClearInput() {
    this.searchKeyword = '';
  }
}
