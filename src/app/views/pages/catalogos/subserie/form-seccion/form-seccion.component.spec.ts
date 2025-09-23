import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeccionComponent } from './form-seccion.component';

describe('FormSeccionComponent', () => {
  let component: FormSeccionComponent;
  let fixture: ComponentFixture<FormSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
