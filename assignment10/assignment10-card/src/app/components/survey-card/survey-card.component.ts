import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  @Input() question: string; 
  @Input() units = "";
  @Input() minVal = 0;
  @Input() maxVal = 100;
  
  @Output() result = new EventEmitter<Number>()
  
  constructor() { }

  ngOnInit(): void {
  }
  
  
  sliderChanged(event: { value: Number; }): void {
    this.result.emit(event.value)
  }

}
