import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreramedlemComponent } from './registreramedlem.component';

describe('RegistreramedlemComponent', () => {
  let component: RegistreramedlemComponent;
  let fixture: ComponentFixture<RegistreramedlemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistreramedlemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreramedlemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
