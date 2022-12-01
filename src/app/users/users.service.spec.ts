import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;
  let req;
  let mockResponse = {
    userListResponse: {
      data: [{
        id: 1,
        email: 'miki@gmail.com',
        first_name: 'michael',
        last_name: 'yimam',
        avatar: 'n/a'
      }]
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UsersService ]
    });
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get a user', () => {
    service.addUser({ name: 'xyz', job: 'clerk' }).subscribe( resp => {
      expect(resp.name).toEqual('xyz');
      expect(resp.job).toEqual('clerk');
    });

    req = httpTestingController.expectOne(service.userUrl + '/users');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({ name: 'xyz', job: 'clerk'});

    req.flush({ name: 'xyz', job: 'clerk' });
  });

  it('should get user lists', () => {
    service.getUsers().subscribe(resp => {
      expect(resp).toEqual(mockResponse.userListResponse);
    });

    req = httpTestingController.expectOne(service.userUrl + '/users');
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse.userListResponse);
  });
});
