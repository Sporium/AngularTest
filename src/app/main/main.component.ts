import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  overShow: boolean = true;

  Over() {
    this.overShow = !this.overShow;

    // document
    //   .querySelector(
    //     '#player_uid_754303974_1 > div.ytp-cued-thumbnail-overlay > button'
    //   )
    //   .click();
  }
  ngOnInit() {}
}
