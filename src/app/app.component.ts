import { Component, OnInit } from '@angular/core';

export interface CatFactInterface {
  fact: string,
  length: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor() { }

  ngOnInit() {
    
  }
}