import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'chat-app';
  
  debug = true;
  
  username = localStorage.getItem('username') || "";
  color = localStorage.getItem('color') || '#000000';
  message: string;
  messages = [];
  
  itemObs: Observable<Item>;

  constructor(private db: AngularFirestore) {}
  
  async ngOnInit() {
    this.db.doc<Item>('/simple/simpleDoc').valueChanges().subscribe(res => {
      this.debug && console.log(res)
      this.username = res.username;
      this.message = res.message;
      this.color = res.color;
    });
    this.username = localStorage.getItem('username')
    this.color = localStorage.getItem('color')
  }
    
  usernameEntered(userEnteredName: string) {
    this.debug && console.log(userEnteredName)
    this.debug && console.log(this.color)
    this.username = userEnteredName
    localStorage.setItem('username', userEnteredName)
  }
  
  async messageEntered(userEnteredMessage: string) {
    // this.debug && console.log(userEnteredMessage)
    // this.debug && console.log(this.messages)
    this.debug && console.log(this.color)
    // this.messages.push(userEnteredMessage)
    const res = await this.db.collection('simple').add({ username: this.username, message: this.message, color: this.color, timestamp: new Date() });
    let temp = this.db.collection<Item>('message', ref => ref.orderBy('timestamp')).get().pipe();

    console.log(temp)

  }
  
  colorChosen(userSelectedColor: string) {
    localStorage.setItem('color', userSelectedColor)
    console.log('color set in local storage')
  }
}

interface Item {
  username: string,
  message: string,
  color: string,
  timestamp: firebase.firestore.Timestamp
}
