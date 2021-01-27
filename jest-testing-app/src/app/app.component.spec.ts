import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  TestBed,
  async,
  tick,
  fakeAsync,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { User, UserService } from './user.service';

describe('AppComponent', () => {
  let userServiceSpy;

  beforeEach(waitForAsync(() => {
    userServiceSpy = {loadCachedUser: jest.fn() }
    userServiceSpy.loadCachedUser.mockReturnValueOnce(
      Promise.resolve([User.build('Jan', 182)])
    );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: UserService, useValue: userServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'default-testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('default-testing-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'default-testing-app is running!'
    );
  });

  it('should show cached user', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    tick(1);
    fixture.detectChanges(); //=> was wird hier getestet? Die Komponente oder Angular?
    expect(compiled.querySelector('li').textContent).toContain(
      'Jan'
    );
  }));

  
it('should render correctly', () => {
  const fixture = TestBed.createComponent(AppComponent);
  expect(fixture).toMatchSnapshot(); // Schritt 1: Legt den Snapshot an, Schritt 2 vergleicht snapshots
});

});
