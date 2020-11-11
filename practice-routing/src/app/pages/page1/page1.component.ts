import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { SimpleService } from 'src/app/services/simple.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private simpleSvc: SimpleService) { let values = simpleSvc.getStringArr();}

  ngOnInit(): void {
  }

}
