import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestServiceProvider } from '../../providers/rest-service/rest-service'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
	providers: [RestServiceProvider]
})
export class SearchPage {

	results = [];

  constructor(public navCtrl: NavController, public restService: RestServiceProvider) {
		this.navCtrl = navCtrl;
		this.results = this.getResults();
		restService.load().then(data => {
			console.log(data);
		});
  }

  getResults() {
    return [
      {
        artist: "Queen",
        song: "Bohemian Rhapsody",
        album: "The Best Of",
        addedBy: "endz",
        imgUrl: "../../assets/imgs/logo.png"
      },
      {
        artist: "Radiohead",
        song: "No Surprises",
        album: "OK Computer",
        addedBy: "esz369",
        imgUrl: "../../assets/imgs/logo.png"
      },
      {
        artist: "Ray LaMontagne",
        song: "Forever My Friend",
        album: "Trouble",
        addedBy: "rullama",
        imgUrl: "../../assets/imgs/logo.png"
      },
      {
        artist: "The Shins",
        song: "Phantom Limb",
        album: "Wincing The Night Away",
        addedBy: "ullsokk1",
        imgUrl: "../../assets/imgs/logo.png"
      }
    ];
  }
}
