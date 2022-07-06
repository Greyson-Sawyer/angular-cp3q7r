import { Component, OnInit } from '@angular/core';
// import { PagesService } from './services/pages.service';

@Component({
  selector: 'default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css'],
})
export class DefaultPageComponent implements OnInit {
  constructor(public pagesService: PagesService) {}

  ngOnInit() {}

  get pages() {
    return this.pagesService.pages;
  }
}
