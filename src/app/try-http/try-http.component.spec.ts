import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryHttpComponent } from './try-http.component';

describe('TryHttpComponent', () => {
  let component: TryHttpComponent;
  let fixture: ComponentFixture<TryHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
