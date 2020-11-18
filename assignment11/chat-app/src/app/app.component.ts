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
  
  debug = false;
  
  username = localStorage.getItem('username') || "";
  color = localStorage.getItem('color') || '#000000';
  message: string;
  messages = [];
  
  itemObs: Observable<Item>;

  constructor(private db: AngularFirestore) {}
  
  async ngOnInit() {
    // Thank you VERY much to Jorge Vergara at
    //  https://jsmobiledev.com/article/angularfire-idfield 
    // for helping me figure out the idField in order to delete documents
    // Make a local variable for the database
    this.db.collection<Item>('/simple', ref => ref.orderBy('timestamp')).valueChanges({ idField: 'docID' }).subscribe(res => {
      this.messages = [];
      res.forEach(element =>
        this.messages.push(element)
      )
      // Auto scroll to bottom when someone enters a new message
      this.scrollToBottom()
    });
    
    // Browser-persistent storage for username and color
    this.username = localStorage.getItem('username')
    this.color = localStorage.getItem('color')
  }
    
  usernameEntered(userEnteredName: string) {
    this.debug && console.log(userEnteredName)
    this.debug && console.log(this.color)
    this.username = userEnteredName
    localStorage.setItem('username', userEnteredName)
  }
  
  async messageEntered() {
    // Don't allow user to send blank or white colored messages
    if (this.message !== '' && this.color !== '#ffffff') {
      await this.db.collection('simple')
        .add({ username: this.username, message: this.message, color: this.color, timestamp: new Date() });
      this.message = '';
    }
  }
  
  colorChosen(userSelectedColor: string) {
    localStorage.setItem('color', userSelectedColor)
    this.color = userSelectedColor;
  }
  
  // Let the browser confirm user message delete and delete the message
  async deleteMessage(messageToDelete: string) {
    if(confirm("Are you sure to delete the message?")) {
      await this.db.collection('simple').doc(messageToDelete).delete()
      this.debug && console.log('Deleted: ', messageToDelete)
    }
  }
  
  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight)
  }
}

interface Item {
  username: string,
  message: string,
  color: string,
  timestamp: firebase.firestore.Timestamp
}
