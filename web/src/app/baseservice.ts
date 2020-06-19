import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    API_BASE_URL = 'http://192.168.43.80:5000/';

    // Login
    SignIn = this.API_BASE_URL + 'api/v1/signin';

    // Register
    SignUp = this.API_BASE_URL + 'api/v1/userprofile/create';
}
