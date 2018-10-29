import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightsListComponent } from './fights-list.component';

describe('FightsListComponent', () => {
  let component: FightsListComponent;
  let fixture: ComponentFixture<FightsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
