import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { LocalStorageService } from '../services/local-storage-service';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private userservice: UserService, private storageService: LocalStorageService, private router: Router) {
  }

  Login() {
    if (this.email == "")
    {
      alert("Please add a valid email");
      return;  
    }
    if (this.password == "")
    {
      alert("Please add a password");
      return;  
    }

    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.userservice.login(user).subscribe( response =>{
        if (response.token != null) {
          this.storageService.saveToken(response.token);
          this.router.navigate(['home']);
        }
        else {
          console.log ('no token');
        }
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
