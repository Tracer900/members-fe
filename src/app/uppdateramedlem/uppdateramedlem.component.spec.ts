import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdateramedlemComponent } from './uppdateramedlem.component';

describe('UppdateramedlemComponent', () => {
  let component: UppdateramedlemComponent;
  let fixture: ComponentFixture<UppdateramedlemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppdateramedlemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppdateramedlemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
