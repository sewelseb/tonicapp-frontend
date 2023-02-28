import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  email: string = "";
  password: string = "";
  legalCheck: boolean = false;

  constructor(private userservice: UserService, private router: Router) {
  }

  createUser() {
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
    if (!this.legalCheck)
    {
      alert("Please agree with the conditions");
      return;  
    }

    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.userservice.createUser(user).subscribe( response =>{
      if(response.email == user.email)
      {
        this.router.navigate(['login']);
      }
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
