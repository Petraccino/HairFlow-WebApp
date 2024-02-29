import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {

  grantValue!: number;
  grantUser: number = 2;
  grantClient: number = 3;

  ngOnInit(): void {}

  constructor( private service: RegisterService){

  }

  register() {
    if (this.grantValue){
      
    }
    }
}
