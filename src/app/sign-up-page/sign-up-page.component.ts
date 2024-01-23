import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signForm: FormGroup | any ;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginServive: LoginService) { };

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signForm.valid) {
      const username = this.signForm.get('username').value;
      const password = this.signForm.get('password').value;
      const cpassword = this.signForm.get('cpassword').value;
      const firstname = this.signForm.get('firstname').value;
      const lastname = this.signForm.get('lastname').value;
      if(password == cpassword){
        console.log('Username:', username);
      console.log('Password:', password);
      console.log('cPassword:', cpassword);
      console.log('firstname:', firstname);
      console.log('lastname:', lastname)
      const signPayload = {username: username, password: password, cpassword: cpassword, firstname: firstname, lastname: lastname};
      this.loginServive.signup(signPayload).subscribe((data: any) => {
        alert('Regiester Successfully');
        this.router.navigate(['/login'])
      })
      }
      else{
        alert('Both Password Should Be Same');
      }
    }else{
        alert('Form is not valid');
      }
  }
}