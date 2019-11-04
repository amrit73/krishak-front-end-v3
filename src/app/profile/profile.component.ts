import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dataso:any

  constructor(private profileServe: ProfileService) { }

  ngOnInit() {
    var loctok = localStorage.getItem('success_login');
    if(!loctok){
      window.location.href="/login"
    }
    return this.profileServe.getData(loctok).subscribe((data: any[]) => {
      this.dataso = data;
      console.log(data)
    });
  }

}
