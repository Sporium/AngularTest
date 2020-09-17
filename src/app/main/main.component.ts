import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user-service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  overShow: boolean = true;
  public modalShow: boolean = true;
  isValidFormSubmitted = null;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  userForm = this.formBuilder.group({
    primaryEmail: ['', Validators.email],
    officialEmail: [
      '',
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
  });
  user = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private vievportScroller: ViewportScroller
  ) {}

  onClickScroll(elementId: string): void {
    this.vievportScroller.scrollToAnchor(elementId);
  }
  Over() {
    this.overShow = !this.overShow;
  }
  ngOnInit() {}
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
      return;
    } else {
      debugger;
      this.modalShow = true;
    }
    this.isValidFormSubmitted = true;
    this.user = this.userForm.value;
    this.userService.createUser(this.user);
    this.userForm.reset();
  }

  get officialEmail() {
    return this.userForm.get('officialEmail');
  }
  public testCall() {
    this.modalShow = !this.modalShow;
  }
  hide() {
    this.modalShow = !this.modalShow;
    debugger;
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
