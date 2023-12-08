import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { GuardianGuard } from './guardian.guard';
import { StateService } from '../service/state.service';
import { AppComponent } from '../app.component';

describe('GuardianGuard', () => {
  let guard: GuardianGuard;
  let stateService: StateService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuardianGuard,
        { provide: StateService, useValue: { userIsLogged: () => of(false) } },
        { provide: Router, useValue: { navigate: () => {} } }
      ]
    });

    guard = TestBed.inject(GuardianGuard);
    stateService = TestBed.inject(StateService);
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return false and navigate to login page when user is not logged in', () => {
    spyOn(stateService, 'userIsLogged').and.returnValue(of(false));
    spyOn(router, 'navigate');
  
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
 
});