import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedlemslistaComponent } from './medlemslista.component';

describe('MedlemslistaComponent', () => {
  let component: MedlemslistaComponent;
  let fixture: ComponentFixture<MedlemslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedlemslistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedlemslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
