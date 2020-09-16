import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    API_BASE_URL = 'http://localhost:5000/';

    // Login
    SignIn = this.API_BASE_URL + 'api/signin';

    // Register
    SignUp = this.API_BASE_URL + 'api/userprofile/create';
}
