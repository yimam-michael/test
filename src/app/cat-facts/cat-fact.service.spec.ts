import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CatFactService } from './cat-fact.service';
import { HttpClient } from '@angular/common/http';

describe('CatFactService', () => {
  let service: CatFactService;
  let httpTestingController: HttpTestingController;
  const mockResponse = {
    catFacts: {
      fact: 'Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor',
      length: 114
    },
    catFactsList: {
      data: [
        {
          fact: 'Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor',
          length: 114
        },
        {
          fact: 'A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.',
          length: 112
        }
      ]
    },
    catBreeds: {
      data: [
        {
          breed: 'Abyssinian',
          country: 'Ethiopia',
          origin: 'Natural/Standard',
          coat: 'Short',
          pattern: 'Ticked'
        }
      ]
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [CatFactService]
    });
    service = TestBed.inject(CatFactService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get catFacts', () => {
    service.getCatFacts().subscribe(
      resp => expect(resp).toEqual(mockResponse.catFacts)
    );

    // checking for correct request method
    const req = httpTestingController.expectOne(service.catFactUrl + '/fact');
    expect(req.request.method).toEqual('GET');
    
    // Provide each request with a mock response
    req.flush(mockResponse.catFacts);
  });
  
  it('should get cat facts list', () => {
    service.getCatFactsList().subscribe(
      resp => expect(resp).toEqual(mockResponse.catFactsList)
    );
      
    const req = httpTestingController.expectOne(service.catFactUrl + '/facts');
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse.catFactsList);
  });

  it('should get cat breeds', () => {
    service.getBreeds().subscribe(
      resp => expect(resp).toEqual(mockResponse.catBreeds)
    );

    const req = httpTestingController.expectOne(service.catFactUrl + '/breeds');
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse.catBreeds);
  });
});
