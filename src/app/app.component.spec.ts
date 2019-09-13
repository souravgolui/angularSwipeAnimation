import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should test animation if swipe left of card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.startAnimation('rollOutLeft');
    fixture.detectChanges();

    expect(app.animateState).toEqual('rollOutLeft');

    app.resetAnimation();
    expect(app.animateState).toEqual('');
  });

  it('should test animation if swipe right of card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.startAnimation('rollOutRight');
    fixture.detectChanges();

    expect(app.animateState).toEqual('rollOutRight');

    app.resetAnimation();
    expect(app.animateState).toEqual('');
  });

  it('should test animation if swipe up of card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.startAnimation('zoomOutUp');
    fixture.detectChanges();

    expect(app.animateState).toEqual('zoomOutUp');

    app.resetAnimation();
    expect(app.animateState).toEqual('');
  });

  it('should test animation if swipe down of card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.startAnimation('fadeOutDown');
    fixture.detectChanges();

    expect(app.animateState).toEqual('fadeOutDown');

    app.resetAnimation();
    expect(app.animateState).toEqual('');
  });

  it('should test animation if click on card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.startAnimation('jello');
    fixture.detectChanges();

    expect(app.animateState).toEqual('jello');

    app.resetAnimation();
    expect(app.animateState).toEqual('');
  });

  it('should test if animateState is not empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.animateState = 'jello';
    app.startAnimation('fadeOutDown');
    fixture.detectChanges();

    expect(app.animateState).toEqual('jello');
  });
});
