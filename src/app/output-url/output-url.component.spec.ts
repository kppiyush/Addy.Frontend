import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputUrlComponent } from './output-url.component';

describe('OutputUrlComponent', () => {
  let component: OutputUrlComponent;
  let fixture: ComponentFixture<OutputUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
