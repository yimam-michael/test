import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactComponent } from './cat-fact.component';

describe('CatFactComponent', () => {
  let component: CatFactComponent;
  let fixture: ComponentFixture<CatFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CatFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
