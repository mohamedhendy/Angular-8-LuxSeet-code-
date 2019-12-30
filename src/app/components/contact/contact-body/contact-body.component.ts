import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.scss']
})
export class ContactBodyComponent implements OnInit {
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }
}
