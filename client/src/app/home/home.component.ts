import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  current_user;
  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
    this.current_user = this._service.user;
    // console.log(this.current_user);
  }

  logout() {
    this._service.logout();
      this._router.navigate(['/login']);
    
  }

}
