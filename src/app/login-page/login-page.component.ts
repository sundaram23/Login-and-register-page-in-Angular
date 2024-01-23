import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup | any;
  sampleUser = [{ id: 1, username: 'sundaram', password: 'sundaram@123' }]
  secretToken = '6297268e-cfeb-462c-ae88-2879c3bd285a';
  constructor(private formBuilder: FormBuilder, private router: Router, private loginServive: LoginService) { };

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      // Perform login logic here
      console.log('Username:', username);
      console.log('Password:', password);

      // const user = this.sampleUser.find(data => data.username == username && data.password == password);
      // console.log('user', user);
      // if (user) {
        
        const loginPayload = {username: username, password: password};
        this.loginServive.login(loginPayload).subscribe(data => {
          console.log("login data", data);
          localStorage.setItem('currentUser', JSON.stringify(data));
          const currentTime = new Date().getTime();
          localStorage.setItem('loggedTime', JSON.stringify(currentTime));
          console.log("localStorage.getItem('currentUser');", localStorage.getItem('currentUser'));
          this.router.navigate(["/dashboard"]);
          alert('Login Successfully');
        }, 
        error => {
          console.log("login getting error", error);
          alert('UserName and  Password is Incorrect')
        });
    } else {
      alert('Form is not valid');
    }
  }

}
