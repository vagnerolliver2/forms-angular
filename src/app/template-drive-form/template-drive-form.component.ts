import { Component, OnInit } from '@angular/core';
import { User } from '../signup.interface';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.css']
})
export class TemplateDriveFormComponent implements OnInit {
  user: User = {
    name: '',
    account: {
      email: '',
      confirm: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitEscape(value: NgForm ) {
    console.log(value);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
