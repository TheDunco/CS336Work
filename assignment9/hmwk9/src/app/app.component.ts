import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hmwk9';
  userGuess: number;
  target = 100;
  accuracy = 1; // percent
  numGuesses = 0;
  feedbackList = [];
  correct = false;
  
  submitPercent(percent: number) {
    this.accuracy = percent;
  }
  
  submitGuess(userGuessUpdate: number): void {
    this.target = userGuessUpdate;
  }
  
  processGuess(userGuess: number): void {
    const correctAnswer = Math.sqrt(this.target);
    const guess = Number(this.userGuess);
    
    if (Math.abs(guess - correctAnswer) / correctAnswer <= this.accuracy / 100) {
      // Guess was close enough
      this.feedbackList.push(`Sure! ${userGuess} is within ${this.accuracy}% of ${correctAnswer}!`)
      this.correct = true;
    }
    // Guess was too low
    else if (guess < correctAnswer) { 
      console.log('answer is too low')
      this.feedbackList.push(`${userGuess} is too low`)
      
    }
    // Guess was too high
    else {    
      console.log('answer is too high')
      this.feedbackList.push(`${userGuess} is too high`)
    }
    this.numGuesses++;
  }
  
  // Thanks to https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
  // For this function
  generateRandomNumber(): void {
    this.target = Math.floor(Math.random() * (250 - 50) + 50);
  }
  
  reset(): void {
    this.target = 100;
    this.accuracy = 1; // percent
    this.numGuesses = 0;
    this.feedbackList = [];
    this.correct = false;
  }
}
