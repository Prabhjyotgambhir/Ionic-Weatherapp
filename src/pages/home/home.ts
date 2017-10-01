import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/Storage';

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
  constructor(public navCtrl: NavController, private weatherprovider : WeatherProvider
  	,private storage:Storage) {
  }

  ionViewWillEnter() {

  	this.storage.get('location').then((val)=>{
  		if(val!=null) {
  			this.location = JSON.parse(val);
  		} else {
  		this.location = {
  		city: 'Ghaziabad',
  		state: 'India'
  			}
  		}


  	this.weatherprovider.getWeatherUpdate(this.location.city,this.location.state).subscribe(weather =>{
  		this.weather = weather.current_observation;
  		console.log(weather);
  	});

  	});


  	
  }
}
