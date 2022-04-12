import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  togglebutton:string='Dashboard'
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('ecolink_user_credential');
    this.route.navigateByUrl('/profile/auth');
  }

}
