import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstConfigurationDTO } from '../models/FirstConfigurationDTO';
import { UserService } from '../services/user-service';


@Component({
  selector: 'app-first-connection',
  templateUrl: './first-connection.component.html',
  styleUrls: ['./first-connection.component.scss']
})
export class FirstConnectionComponent {
  public firstConfiguration : FirstConfigurationDTO = new FirstConfigurationDTO();

  constructor(private userService: UserService,private router: Router) {
    

    userService.isLoggedInUser().subscribe( response =>{
      if(response.isLoggedIn !== true) {
        this.router.navigate(['login']);
      }
    });
  }

  save() {
    this.userService.firstConnectionConfiguration(this.firstConfiguration).subscribe( response =>{
      console.log(response);
    });;
  }
}
