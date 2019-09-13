import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import * as Hammer from 'hammerjs';

export class MyGestureConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL }
  } as any;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: MyGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
