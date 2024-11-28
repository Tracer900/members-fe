import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilinfoComponent } from './profilinfo.component';

describe('ProfilinfoComponent', () => {
  let component: ProfilinfoComponent;
  let fixture: ComponentFixture<ProfilinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
