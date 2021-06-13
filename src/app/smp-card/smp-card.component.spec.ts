import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpCardComponent } from './smp-card.component';

describe('SmpCardComponent', () => {
  let component: SmpCardComponent;
  let fixture: ComponentFixture<SmpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
