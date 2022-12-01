import { Component, OnInit } from '@angular/core';
import { CatFactInterface } from 'src/app/app.component';
import { CatBreed, CatFactService } from '../cat-fact.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.scss']
})
export class CatFactComponent implements OnInit {

  catFact: CatFactInterface = { fact: '', length: 0};
  catFactList: CatFactInterface[] = [];
  catBreeds: CatBreed[] = [];
  
  constructor(private catFactService: CatFactService) { 
    this.catFactService.getCatFacts().subscribe(resp => {
      this.catFact = resp;
    });

    this.catFactService.getCatFactsList().subscribe(resp => {
      this.catFactList = resp.data;
      console.log(resp)
    });

    this.catFactService.getBreeds().subscribe(resp => {
      this.catBreeds = resp.data;
    });
  }

  ngOnInit(): void {
  }

}
