import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseColumnComponent } from './choose-column.component';

describe('ChooseColumnComponent', () => {
  let component: ChooseColumnComponent;
  let fixture: ComponentFixture<ChooseColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
