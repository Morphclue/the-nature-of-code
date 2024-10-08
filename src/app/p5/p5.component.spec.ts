import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5Component } from './p5.component';

describe('P5Component', () => {
  let component: P5Component;
  let fixture: ComponentFixture<P5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
