import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseservice';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginValues = {
    email : '',
    password : ''
  }
  constructor(
    private http: HttpClient,
    private baseservice: BaseService,
    private toastservice: ToasterService, ) {
  }

  ngOnInit(): void {
  }
  signIn() {
      this.http.post(this.baseservice.SignIn, this.loginValues).subscribe(
        data => {
          if (data) {
            this.toastservice.showSucess('Sucess', 'LoginSucess');
          }
          this.toastservice.showError('Failed', 'LOgin Failed');
      });
  }

}
