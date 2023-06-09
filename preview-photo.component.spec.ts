import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPhotoComponent } from './preview-photo.component';

describe('PreviewPhotoComponent', () => {
  let component: PreviewPhotoComponent;
  let fixture: ComponentFixture<PreviewPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewPhotoComponent]
    });
    fixture = TestBed.createComponent(PreviewPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
