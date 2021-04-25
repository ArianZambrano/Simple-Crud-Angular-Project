import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxFormUpdateComponent } from './aux-form-update.component';

describe('AuxFormUpdateComponent', () => {
  let component: AuxFormUpdateComponent;
  let fixture: ComponentFixture<AuxFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
