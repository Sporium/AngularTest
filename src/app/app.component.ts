import { Component, OnDestroy, OnInit } from '@angular/core';
// import { MediaObserver, MediaChange } from '@angular/flex-layout';
// import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularTest';
  // mediaSub: Subscription;
  // deviseXs: boolean;
  // constructor(public MediaObserver: MediaObserver) {}

  // ngOnInit() {
  //   this.mediaSub = this.MediaObserver.media$.subscribe(
  //     (result: MediaChange) => {
  //       console.log(result.mqAlias);
  //       this.deviseXs = result.mqAlias === 'xs' ? true : false;
  //     }
  //   );
  // }
  // ngOnDestroy() {
  //   this.mediaSub.unsubscribe();
  // }
}
