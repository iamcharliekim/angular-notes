import { DataService } from './../data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ArrayType } from '@angular/compiler';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder, public dataService: DataService, private router: Router) { }
  
  addForm = this.fb.group({
    name: ['', Validators.required],
    body: ['']
  })

  addNoteSubmit(){
    let name: string= this.addForm.value.name
    let body: string = this.addForm.value.body
    let id: string = new Date().getTime().toString()

    const note: Object = { name, body, id }

    this.dataService.sendArray(note)

    this.router.navigate(['/'])


  }


  ngOnInit() {
  }

}
