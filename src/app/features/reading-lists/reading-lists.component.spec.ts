import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListsComponent } from './reading-lists.component';

describe('ReadingListsComponent', () => {
  let component: ReadingListsComponent;
  let fixture: ComponentFixture<ReadingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
