import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should make a GET request to fetch the characters', () => {
    service.getCharacters().subscribe();
  
    const req = httpMock.expectOne('https://dummyjson.com/users');
    expect(req.request.method).toBe('GET');
  
    httpMock.verify();
});
});