"use strict";
import {GWS} from '../gws/core.js';
const core = new GWS;
core.displayInit('#main', 'game', 1920, 1080, 64);
core.setScreenPoint(64);
const display = core.getDisplay();
// display.ctx.fillRect(display.screenPoint * 5, display.screenPoint * 6, display.screenPoint, display.screenPoint);
let turn = {x : 10, y : 10, w : 100, h : 50};
core.addClick('1', turn, function () {
    console.log('cl');
});
console.log(turn);
let img = new Image();
img.src = '../images/back.png';
core.setRender(function () {
    core.display.ctx.drawImage(img, 0, 0, 1920, 1080);
    core.createModal(1920 / 2 - 500 / 2, 1080 / 2 - 300 / 2, 500, 300);
    // core.display.ctx.fillStyle = '#ddd';
    core.display.ctx.fillRect(turn.x, turn.y, turn.w, turn.h);
});
// console.log(core);
// core.render()
// core.setFPS(30);
core.loop();
setTimeout(function () {

}, 1000)