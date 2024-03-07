import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthRequest } from '../model/AuthRequest';
import { LoginService } from '../service/login/login.service';
import { DialogComponent } from '../dialog/dialog.component';

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
  constructor(
    private service: LoginService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {}

  login() {
    if (this.form.valid) {
      this.service.login(this.__authRequest).subscribe();
    } else {
      this.dialog.open(DialogComponent, {
        data: {
          icon: 'Check',
          message: 'This is the Alert Dialog',
        },
      });
    }
  }

  set authRequest(authRequest: AuthRequest) {
    this.__authRequest = authRequest;
  }

  get authRequest(): AuthRequest {
    return this.__authRequest;
  }
}
