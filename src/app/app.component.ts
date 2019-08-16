import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-notes-app';

  public dropdown = false;

  constructor(){}

  openDropDown(){
    this.dropdown = !this.dropdown
    console.log(this.dropdown)
  }
  
}
