import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-first-connection',
  templateUrl: './first-connection.component.html',
  styleUrls: ['./first-connection.component.scss']
})
export class FirstConnectionComponent {
  constructor(private userService: UserService,private router: Router) {

    userService.isLoggedInUser().subscribe( response =>{
      if(response.isLoggedIn !== true) {
        this.router.navigate(['login']);
      }
    });
  }
}
