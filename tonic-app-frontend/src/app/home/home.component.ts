import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private userService: UserService,private router: Router) {

    userService.isLoggedInUser().subscribe( response =>{
        if(response.isLoggedIn !== true) {
          this.router.navigate(['login']);
        }
    });

    userService.isfirstConnectionConfigurationDone().subscribe(response => {
      if(response.isFirstConfigurationDone !== true) {
        this.router.navigate(['first-connection']);
      }
    });
  }
}
