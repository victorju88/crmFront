import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaprospectoComponent } from './altaprospecto.component';

describe('AltaprospectoComponent', () => {
  let component: AltaprospectoComponent;
  let fixture: ComponentFixture<AltaprospectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaprospectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaprospectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
