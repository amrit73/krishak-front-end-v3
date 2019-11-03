import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged:Boolean

  constructor() { }

  ngOnInit() {
    
  }

  getLoggedin(username: any, password: any) {
    Validit: Boolean;


    if (username == '' || password == '') {
      alert('Invalid credintials');
    }
    else {
      $.ajax({
        url: 'http://localhost:90/login', 
        type: 'POST',
        data: {
          username: $("#username").val(),
          password: $("#password").val()
        },
        success: function (data) {
          if (data.success == true) {
            alert('welcome');
            console.log(data)
            localStorage.setItem('success_login', data.token);
            localStorage.setItem('uid', data.userid);
            var track = localStorage.getItem("last_track");
            if (track == 'carting') {
              window.location.href = '/cart';
            } else {
              window.location.href = '/items';
            }
          }
          else {
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