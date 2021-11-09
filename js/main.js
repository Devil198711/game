"use strict";
import {GWS} from '../gws/core.js';
const core = new GWS;
core.displayInit('#main', 'game', 1920, 1080, 64);
core.setScreenPoint(64);
const display = core.getDisplay();
// display.ctx.fillRect(display.screenPoint * 5, display.screenPoint * 6, display.screenPoint, display.screenPoint);
// let turn = {x : 10, y : 10, w : 100, h : 50};
// let turn2 = {x : 100, y : 100, w : 100, h : 50};
// core.addClick('1', turn, function () {
//     console.log('cl');
// });
// core.addClick('2', turn2, function () {
//     console.log('cl2');
// });
// console.log(turn);
let img = new Image();
img.src = '../images/back.png';
core.setRender(function () {
    core.display.ctx.drawImage(img, 0, 0, 1920, 1080);
    // core.display.ctx.fillStyle = '#ddd';
    // core.display.ctx.fillRect(turn.x, turn.y, turn.w, turn.h);
    // core.display.ctx.fillRect(turn2.x, turn2.y, turn2.w, turn2.h);
});
// console.log(core);
// core.render()
// core.setFPS(30);
core.loop();
setTimeout(function () {
    core.createModal(1920 / 2 - 500 / 2, 1080 / 2 - 300 / 2, 500, 300, `Привет<p>Привет</p>`);
}, 1000)