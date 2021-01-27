import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular'
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  // beforeEach(waitForAsync(() => {
  //   userServiceSpy = jasmine.createSpyObj(['loadCachedUser']);
  //   userServiceSpy.loadCachedUser.and.returnValue(
  //     Promise.resolve([User.build('Jan', 182)])
  //   );

  //   TestBed.configureTestingModule({
  //     imports: [RouterTestingModule],
  //     declarations: [AppComponent],
  //     providers: [{ provide: UserService, useValue: userServiceSpy }],
  // }).compileComponents();
  // }));

  test('should create the app', async () => {
    await render(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    
    const headline = screen.getByText('default-testing-app is running!')
    
    expect(headline).toBeTruthy();
  });

  // it('should show cached user', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   tick(1);
  //   fixture.detectChanges(); //=> was wird hier getestet? Die Komponente oder Angular?
  //   expect(compiled.querySelector('li').textContent).toContain('Jan');
  // }));
});
