import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShopComponent } from './post-shop.component';

describe('PostShopComponent', () => {
  let component: PostShopComponent;
  let fixture: ComponentFixture<PostShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
