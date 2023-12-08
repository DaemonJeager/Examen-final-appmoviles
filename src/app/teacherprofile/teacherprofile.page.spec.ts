import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherprofilePage } from './teacherprofile.page';

describe('TeacherprofilePage', () => {
  let component: TeacherprofilePage;
  let fixture: ComponentFixture<TeacherprofilePage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(TeacherprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
