import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor() {
    console.log ('Service B');
   }
}
