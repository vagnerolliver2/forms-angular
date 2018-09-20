import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../signup.interface';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myControl: FormControl;
  myGroup: FormGroup;
  user: FormGroup;


  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }

  ngOnInit() {

    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });

    // const control = new FormGroup({
    //   vagner: new FormControl('Todd Motto'),
    //   fulano: new FormControl('England, UK'),
    // });

    // this.myControl =  new FormControl('Todd Motto');

    // this.myGroup = new FormGroup({
    //   name: new FormControl('Todd Motto'),
    //   location: new FormControl('England, UK')
    // });

    // this.myGroup.addControl('new', this.myControl);

    // this.myGroup.removeControl('control');

  }

}
