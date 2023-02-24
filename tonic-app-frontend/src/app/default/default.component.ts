import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

  constructor(private userService: UserService,private router: Router) {

      userService.isLoggedInUser().subscribe( response =>{
          console.log('got the response');
          if(response.isLoggedIn === true) {
            this.router.navigate(['home']);
          }  
          else {
            this.router.navigate(['login']);
          }  
      });
  }
}
