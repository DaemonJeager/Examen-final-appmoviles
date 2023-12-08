import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { ApiService } from '../api/api.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [
        { provide: ApiService, useValue: jasmine.createSpyObj('ApiService', ['getCharacters']) }
      ]
    })
    .compileComponents();

    apiService = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });
  
  it('should initialize character status to "Presente" on init', () => {
    const mockCharacters = [{ name: 'Character 1' }, { name: 'Character 2' }];
    (apiService.getCharacters as jasmine.Spy).and.returnValue(of(mockCharacters));
  
    component.ngOnInit();
  
    const expectedCharacters = mockCharacters.map(character => ({
      ...character,
      status: 'Presente'
    }));
  
    expect(component.personaje).toEqual(expectedCharacters);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters from API on init', () => {
    const mockCharacters = [{ name: 'Character 1' }, { name: 'Character 2' }];
    (apiService.getCharacters as jasmine.Spy).and.returnValue(of(mockCharacters));

    component.ngOnInit();

    expect(component.personaje).toEqual(mockCharacters);
    expect(apiService.getCharacters).toHaveBeenCalled();
  });
});