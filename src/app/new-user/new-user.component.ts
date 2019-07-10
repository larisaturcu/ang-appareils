import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../model/User.model';
import { Router } from '@angular/router';

@ Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this .initForm();
  }

  initForm(){
    this .userForm = this .formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      drinkPreferences: '',
      hobbies: this .formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this .userForm.value;
    const newuser: User = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreferences'],
      formValue['hobbies'] ? formValue['hobbies']: []
      );

    this .userService.addUser(newuser);
    this .router.navigate(['/users']);
  }

  getHobbies() {
    return this .userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
   const newHobbyControl = this .formBuilder.control('', Validators.required);
   this .getHobbies().push(newHobbyControl);
  }
}
