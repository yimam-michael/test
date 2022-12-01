import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';

import { UsersComponent } from './users.component';

fdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: UsersService;
  let userServiceSpy: jasmine.SpyObj<UsersService>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        FormBuilder, 
        // UsersService,
        { provide: UsersService, use: userServiceSpy }
      ],
      declarations: [ UsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    service = TestBed.inject(UsersService)as jasmine.SpyObj<UsersService>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('should display form', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form.textContent).toContain('Name:');
    expect(form.textContent).toContain('Job:');

    const inputs = form.querySelectorAll('input');
    fixture.detectChanges();
    expect(inputs.length).toBe(2);
  });
});
