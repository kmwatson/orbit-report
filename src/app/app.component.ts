import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
}

var sourceList: Satellite[] = [
    new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
    new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
    new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
    new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
    new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
  ]; 
  
console.log(sourceList);
/*
  let siriusXM = new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true);
  let catScanner = new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true);
  let weberGrill = new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false);
  let gps938 = new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true);
  let iss = new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true);
*/
