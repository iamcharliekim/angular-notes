import { DataService } from './../data.service';
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public noteID;
  public selectedNote;

  constructor(private route: ActivatedRoute, public dataService: DataService) { 
    

  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.noteID = id

    this.dataService.notesArray$.subscribe(note => {
      this.selectedNote = note
      console.log(this.selectedNote)
    })
  }


}
