import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseservice';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    firstname : '',
    lastname  : '',
    email : '',
    password : '',
    mobile: '',
  }

  constructor(
    private baseservice: BaseService,
    private toastservice: ToasterService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.http.post(this.baseservice.SignUp, this.user).subscribe(
      data => {
          if (data) {
            this.toastservice.showSucess('Sucess', 'User Created Sucessfully');
          }
          this.toastservice.showError('Failed', 'User Does not created');
      });
  }

}
