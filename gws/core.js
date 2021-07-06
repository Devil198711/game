class GWS {
    constructor () {
        this.displayWidth = 1366;
        this.displayHeight = 768;
        this.point = 32;
        this.pointX = Math.floor(1366 / 32);
        this.pointY = Math.floor(768 / 32);
        this.display;
        this.loopPause = false;
        this.timeStart = 0;
        this.fps = 0.0165;
        this.fpsCount = 0;
    }
    displayInit(block, name = 'game-canvas', width = 1366, height = 768) {
        const display = document.querySelector(block);
        if (display) {
            this.displayWidth = width;
            this.displayHeight = height;
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.id = name;
            canvas.ctx = canvas.getContext('2d')
            display.appendChild(canvas);
            this.display = canvas;
        }
    }
    setDisplayPoint(point = 32) {
        this.point = point;
        this.pointX = Math.floor(this.displayWidth / this.point);
        this.pointY = Math.floor(this.displayHeight / this.point);
    }
    getDisplay() {
        this.display.point = this.point;
        this.display.pointX = this.pointX;
        this.display.pointY = this.pointY;
        this.display.render = this.render;
        this.display.setRender = this.setRender;
        return this.display;
    }
    render() {

    }
    setRender(render) {
        this.render = render;
    }
    setFPS(fps) {
        this.fps = ((1000 /  fps) * 0.001) - 0.001;
        console.log(this.fps);
    }
    loop() {
        let context = this;
        context.loopPause = false;
        requestAnimationFrame(function (e) {
            let time = e * 0.001;
            let delta = time - context.timeStart;
            console.log(delta, time);
            if (delta >= context.fps) {
                context.timeStart = time;
                context.fpsCount++;
                context.display.ctx.clearRect(0, 0, context.width, context.height);
                context.render();
            } else {
                console.log(false);
            }
            if (!context.loopPause) {
                context.loop();
            }
        })
    }
    loopStop() {
        this.timeStart = 0;
        this.loopPause = true;
    }
}
export {GWS};