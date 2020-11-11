import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }
  
  private stringArr = ['One', 'Two', 'Three', 'Four', 'Five'];
  
  getStringArr(): string[] {
    return this.stringArr;
  }
  
  setStringArr(newStringArr: string[]) {
    this.stringArr = newStringArr;
  }
  
  addToStringArr(s: string): void {
    this.stringArr.push(s);
  }
  

}
