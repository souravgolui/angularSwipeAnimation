import { trigger, transition, animate, keyframes } from '@angular/animations';
import * as kf from './keyframes';

export const animateState = [
    trigger('cardAnimator', [
        transition('* => rollOutRight', animate(500, keyframes(kf.rollOutRight))),
        transition('* => rollOutLeft', animate(500, keyframes(kf.rollOutLeft))),
        transition('* => jello', animate(1000, keyframes(kf.jello))),
        transition('* => zoomOutUp', animate(500, keyframes(kf.zoomOutUp))),
        transition('* => fadeOutDown', animate(500, keyframes(kf.fadeOutDown))),
        transition('* => fadeOutUp', animate(500, keyframes(kf.fadeOutUp)))
      ])
];
