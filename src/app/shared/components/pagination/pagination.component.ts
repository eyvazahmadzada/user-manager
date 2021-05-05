import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pages: number;

  // Current page
  curPage: number = 1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Set current page if specified in the route
    this.route.queryParams.subscribe((params) => {
      const pageParam = +params['page'];
      if (pageParam) {
        this.curPage = pageParam;
      }
    });
  }

  updateRoute() {
    // Update route whenever the curPage changes
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.curPage
      }
    });
  }

  onSetCurrent(page: number) {
    // Set clicked page current
    this.curPage = page;
    this.updateRoute();
  }

  onSetNext() {
    // Set next page current
    if (this.curPage < this.pages) {
      this.curPage++;
      this.updateRoute();
    }
  }

  onSetPrev() {
    // Set prev page current
    if (this.curPage > 1) {
      this.curPage--;
      this.updateRoute();
    }
  }
}
