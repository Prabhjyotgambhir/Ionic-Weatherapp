import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
	apiKey = 'b3939763dea893d5';
	url;

  constructor(public http: Http) {
  	this.url = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q';
    console.log('Hello WeatherProvider Provider');
  }

  getWeatherUpdate(city,state) {
  	return this.http.get(this.url + '/' + state + '/' + city + '.json')
  		.map(res => res.json());
  }

}
