import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerPage } from './restablecer.page';
import { FormsModule } from '@angular/forms';

describe('RestablecerPage', () => {
  let component: RestablecerPage;
  let fixture: ComponentFixture<RestablecerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestablecerPage ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component['resetForm'].value).toEqual({ email: '' });
  });
});