import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionalumnoPage } from './sesionalumno.page';

describe('SesionalumnoPage', () => {
  let component: SesionalumnoPage;
  let fixture: ComponentFixture<SesionalumnoPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(SesionalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
