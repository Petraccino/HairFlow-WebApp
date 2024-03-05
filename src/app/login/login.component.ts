import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthRequest } from '../model/AuthRequest';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  private __authRequest: AuthRequest = new AuthRequest();
  constructor(private service: LoginService, private router: Router){

  }
  ngOnInit(): void {}

  login() {
    if(this.form.valid){
      this.service.login(this.__authRequest).subscribe();
      
    } else {
      this.router.navigateByUrl('');
    }
  }

  set authRequest(authRequest: AuthRequest) {
    this.__authRequest = authRequest;
  }

  get authRequest(): AuthRequest {
    return this.__authRequest;
  }
}
