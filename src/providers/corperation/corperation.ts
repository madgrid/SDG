import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CorperationProvider {

  url: string = 'https://www.caringcurrency.com/api';

  constructor(public http: Http) {
  }


  sendSignUp(user) {
    console.log('1',user)
    return this.post('company', user);
  }

  post(endpoint: string, body: any) {
    console.log('2',endpoint)
    console.log('3',body)
    return this.http.post(this.url + '/' + endpoint, body);
  }

}
