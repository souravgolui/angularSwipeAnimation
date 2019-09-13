import { BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MyGestureConfig } from './hammer.mock';

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
