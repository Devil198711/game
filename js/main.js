"use strict";
import {GWS} from '../gws/core.js';
const core = new GWS;
core.displayInit('#main', 'game', 1920, 1080, 64);
core.setScreenPoint(64);
const display = core.getDisplay();
// display.ctx.fillRect(display.screenPoint * 5, display.screenPoint * 6, display.screenPoint, display.screenPoint);
core.setRender(function () {
    for (let z = 0; z <= 3; z++) {
        for (let y = 0; y <= core.screenPointY; y++) {
            for (let x = 0; x <= core.screenPointX; x++) {
                core.display.ctx.fillStyle = `#${Math.floor(Math.random() * 999)}`;
                core.display.ctx.fillRect(this.screenPoint * x, core.screenPoint * y, core.screenPoint, core.screenPoint);
            }
        }
    }
});
// console.log(core);
// core.render()
// core.setFPS(30);
core.loop();
setTimeout(function () {
    console.log(core.timeStart);
    core.loopStop()
    console.log(core.timeStart);
    console.log(core.fpsCount);
}, 1000)