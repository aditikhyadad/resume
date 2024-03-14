import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registration: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.registration = this.fb.group({
      id: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSub() {
    // alert(500)
    if (this.registration.valid) {
      const enteredId = this.registration.value.id;
      const enteredPassword = this.registration.value.pass;

      // Call a service or perform your authentication logic here
      if (this.checkCredentials(enteredId, enteredPassword)) {
        console.log('Credentials are correct. Perform further actions.');
        alert('Credentials are correct. Perform further actions.')
        this.router.navigate(['info'])

      } else {
        console.log('Invalid credentials. Display an error message or take appropriate action.');
        alert('Invalid credentials')
      }
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  checkCredentials(enteredId: string, enteredPassword: string): boolean {
    // Adjust the comparison with your actual credentials
    const correctId = '12345';
    const correctPassword = 'abc';
  
    return enteredId === correctId && enteredPassword === correctPassword;
  }
}