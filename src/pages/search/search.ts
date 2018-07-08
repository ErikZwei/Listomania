import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	results = [];

  constructor(public navCtrl: NavController) {
		this.navCtrl = navCtrl;
		this.results = this.getResults();
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
        addedBy: "ullsokk",
        imgUrl: "../../assets/imgs/logo.png"
      }
    ];
  }
}
