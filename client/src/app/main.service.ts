import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';

@Injectable()
export class MainService {
  user;
  constructor(private _http: Http) {
    if (localStorage.user != undefined) {
      this.user = JSON.parse(localStorage.user);
    }
  }

  register(userdata, callback) {
    this._http.post("/register", userdata).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
        if (res.json().success == "success") {
          this.user = res.json().user;
          localStorage.user = JSON.stringify(res.json().user);
        }
      },
      (err) => {
        console.error("from service register error: ", err);
      }
      )
  }

  login(userdata, callback) {
    // console.log(userdata);
    this._http.post("/login", userdata).subscribe(
      (res) => {
        callback(res.json());
        this.user = res.json();
        if (res.json().error == undefined) {
          this.user = res.json();
          // console.log("from service login: ", this.user);
          localStorage.user = JSON.stringify(res.json());
        }
      },
      (err) => {
        console.log("error from login service: ", err);
      })
  }

  //add a new user by admin
  add_new(userdata, callback) {
    this._http.post("/register", userdata).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
      },
      (err) => {
        console.log("from service add_new error: ", err);
      }
    )
  }

  logout() {
    localStorage.removeItem("user");
    
  }

}
