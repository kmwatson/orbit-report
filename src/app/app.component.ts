import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  satellitesUrl: string = 'https://handlers.education.launchcode.org/static/satellites.json';

  constructor(){
    this.sourceList = [];
    this.displayList = [];
    window.fetch(this.satellitesUrl).then(function(response) {
      response.json().then(function(data) {

         let satellites = data.satellites;
         // TODO: loop over satellites
         for (let i=0; i < satellites.length; i++) {
        // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational); 
          let satellite = new Satellite(satellites[i].name, satellites[i].type, satellites[i].launchDate, satellites[i].orbitType, satellites[i].operational);
         // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite); 
          this.sourceList.push(satellite);
         }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
   }.bind(this));
  }
  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLocaleLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLocaleLowerCase();
       if (name.includes(searchTerm)) {
          matchingSatellites.push(this.sourceList[i]);
       } 
    }
    // assign this.displayList to be the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
  }
};