import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroePoderComponent } from './heroe-poder.component';

describe('HeroePoderComponent', () => {
  let component: HeroePoderComponent;
  let fixture: ComponentFixture<HeroePoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroePoderComponent]
    });
    fixture = TestBed.createComponent(HeroePoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
