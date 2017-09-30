import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	weather: any;
	location: {
		state: String,
		city: String
	}
  constructor(public navCtrl: NavController, private weatherprovider : WeatherProvider) {

  }

  ionViewWillEnter() {
  	this.location = {
  		city: 'Ghaziabad',
  		state: 'India'
  	}
  	this.weatherprovider.getWeatherUpdate(this.location.city,this.location.state).subscribe(weather =>{
  		this.weather = weather.current_observation;
  		console.log(weather);
  	});
  }
}
