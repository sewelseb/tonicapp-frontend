import { Component } from '@angular/core';
import { User } from '../models/User';
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
    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.userservice.login(user).subscribe( response =>{
      
        console.log(response);
        //TODO: save the token and redirect user to connected page
      
    });;
  }
}
