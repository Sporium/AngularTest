import { MainComponent } from './../main/main.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [MainComponent],
})
export class ModalComponent implements OnInit {
  constructor(private comp: MainComponent) {}
  public callMe(): void {
    this.comp.testCall();
  }
  ngOnInit(): void {}
}
