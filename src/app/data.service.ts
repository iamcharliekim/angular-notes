import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private notesArray = new Subject<object>()

  notesArray$ = this.notesArray.asObservable();

  constructor() { }

  sendArray(array: object){
    this.notesArray.next(array)
  }

}
