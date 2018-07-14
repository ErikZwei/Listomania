import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map'

/*
  See https://angular.io/guide/dependency-injection for more info on providers and Angular DI.
*/

@Injectable()
export class RestServiceProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello RestServiceProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset=utf-8");
    myHeaders.append("Content-type", "application/json; charset=utf-8");
    myHeaders.append("Authorization", "Bearer BQAOkukO4rQIZyKdkz66rX8UZVltnxwJeRFnewEe-d-2AUwWcmM8TMocujV6ozVEWfEk_X1Sqfd7uOOlV58LeLWxZxiFL4IEQ3s_aRECqUub-B4PrO5MSyHJyvZVNA_CnbEMaTn6xw");

    opt = new RequestOptions({
      headers: myHeaders
    })

    return new Promise(resolve => {
      //			this.http.get("https://www.vg.no", opt)
      this.http.get("https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5", opt)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
