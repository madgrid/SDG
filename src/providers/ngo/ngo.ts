import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NgoProvider {
  url: string = 'https://ap-southeast-1.console.aws.amazon.com:8090';

  constructor(public http: Http) {
  }


  sendSignUp(user) {
    console.log('1',user)
    return this.post('ngo', user);
  }

  post(endpoint: string, body: any) {
    console.log('2',endpoint)
    console.log('3',body)
    return this.http.post(this.url + '/' + endpoint, body);
  }
}
