import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from '../signup.interface';
import { Workflow } from '../model';

import { WORKFLOW } from '../worflowgroup';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {

  user: FormGroup;
  myControl: FormGroup;
  orderForm: FormGroup;

  mockWorkflow: Workflow;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.orderForm = this.fb.group({
      customerName: '',
      emails: this.fb.array([]),
      items: this.fb.array([])
    });

    // this.user = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   account: this.fb.group({
    //     email: ['', Validators.required],
    //     confirm: ['', Validators.required]
    //   })
    // });
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  addItems() {
    this.items.push(this.createItem());
  }

  get emails() {
    return this.orderForm.get('emails') as FormArray;
  }

  get items() {
    return this.orderForm.get('items') as FormArray;
  }

  remove(formArray: FormArray, index) {
    formArray.removeAt(index);
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
