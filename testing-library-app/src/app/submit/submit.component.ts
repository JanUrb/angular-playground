import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent {
  userForm = this.fb.group({
    name: ['', Validators.required],
    groesse: ['', Validators.compose([Validators.min(0), Validators.required])],
  });

  @Output()
  addUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  submitUser(): void {
    console.log('Submitting user');
    this.addUser.emit({
      name: this.userForm.get('name').value,
      height: this.userForm.get('groesse').value,
    });
  }
}
