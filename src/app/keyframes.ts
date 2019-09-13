import {keyframes, style } from '@angular/animations';

export const rollOutRight = [
    style({opacity: 1, offset: 0}),
    style({transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 130deg)', opacity: 0, offset: 1})
];

export const rollOutLeft = [
    style({opacity: 1, offset: 0}),
    style({transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -130deg)', opacity: 0, offset: 1})
];

export const jello = [
    style({transform: 'translate3d(0, 0, 0)', offset: 0.1}),
    style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.2}),
    style({transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.3}),
    style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.4}),
    style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.5}),
    style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.6}),
    style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.7}),
    style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.8})
];

export const zoomOutUp = [
    style({
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475)',
        'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        offset: 0}),

    style({
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
        'transform-origin': 'center bottom',
        'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)',
        offset: 1}),
];

export const fadeOutDown = [
    style({
        opacity: 1,
        offset: 0}),

    style({
        opacity: 0,
        transform: 'translate3d(0, 150%, 0)',
        offset: 1}),
];


export const fadeOutUp = [
    style({
        opacity: 1,
        offset: 0}),

    style({
        opacity: 0,
        transform: 'translate3d(0, -150%, 0)',
        offset: 1}),
];
