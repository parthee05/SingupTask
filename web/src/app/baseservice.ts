import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    API_BASE_URL = 'http://192.168.1.5:3000/';

    // Login
    SignIn = this.API_BASE_URL + 'api/v1/signin';
}
