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
  legalCheck: boolean = false;

  constructor(private userService: UserService,private router: Router) {

    userService.isLoggedInUser().subscribe( response =>{
      if(response.isLoggedIn !== true) {
        this.router.navigate(['login']);
      }
    });
  }

  save() {
    if (!this.legalCheck)
    {
      alert("Please agree with the conditions");
      return;  
    }
    
    this.userService.firstConnectionConfiguration(this.firstConfiguration).subscribe( response =>{
      this.router.navigate(['home']);
    });;
  }
}
