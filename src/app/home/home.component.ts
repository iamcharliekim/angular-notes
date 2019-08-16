import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataService, private router: Router) { }
  
  notes: any[] = [];

  ngOnInit() {
    this.dataService.notesArray$.subscribe(note => {
        this.notes.push(note)
        
        console.log(this.notes)

    })

  }


  onSelect(id){
    this.router.navigate(['/note', id])

  }
}
