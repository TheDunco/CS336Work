import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vic = 'CS336 Rocks!';
  
  constructor() {
    this.updateTitle();
    
  }
  
  updateTitle() { 
    setTimeout(() => {
      this.vic = this.vic + "!"
      this.updateTitle();
    }, 1000)
  }
}
