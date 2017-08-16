import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CorperationProvider {

  url: string = 'http://ec2-54-169-58-55.ap-southeast-1.compute.amazonaws.com:8090';

  constructor(public http: Http) {
  }


  sendSignUp(user) {
    console.log('1',user)
    return this.post('corperation', user);
  }

  post(endpoint: string, body: any) {
    console.log('2',endpoint)
    console.log('3',body)
    return this.http.post(this.url + '/' + endpoint, body);
  }

}
