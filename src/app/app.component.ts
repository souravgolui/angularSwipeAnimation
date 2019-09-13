import { Component } from '@angular/core';
import * as animate from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: animate.animateState
})
export class AppComponent {

  animateState: string;

  startAnimation(state) {
    if (!this.animateState) {
      this.animateState = state;
    }
  }

  resetAnimation() {
    this.animateState = '';
  }
}
