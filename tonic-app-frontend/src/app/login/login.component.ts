import { Component } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private userservice: UserService) {
  }

  Login() {
    
  }
}
