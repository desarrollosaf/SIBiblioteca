import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubserieComponent } from './subserie.component';

describe('SubserieComponent', () => {
  let component: SubserieComponent;
  let fixture: ComponentFixture<SubserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubserieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
