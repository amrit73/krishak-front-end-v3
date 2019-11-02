import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getLoggedin(username:any, password:any){
 Validit:Boolean;


    if (username=='' || password=='') {
      alert('Invalid credintials');
  }
  else {
  $.ajax({
    url: 'http://localhost:90/login',
    type: 'POST',
    data: {
      username: username.value,
      password: password.value
    },
    success: function (data) {
      if (data.success == true) {
        alert('welcome');
        window.location.href = '/admin';
        localStorage.setItem('success_login', 'session_verified');
      }
      else{
        alert('Invalid credintials');
      }
    },
    error: function (err) {
     alert('Something went wrong');
    }
  })
}

  }


}
