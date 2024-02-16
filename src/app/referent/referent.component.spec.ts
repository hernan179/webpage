import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentComponent } from './referent.component';

describe('ReferentComponent', () => {
  let component: ReferentComponent;
  let fixture: ComponentFixture<ReferentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
