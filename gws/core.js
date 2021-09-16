class GWS {
    constructor () {
        this.displayWidth = 1366;
        this.displayHeight = 768;
        this.screenPoint = 32;
        this.screenPointX = Math.floor(1366 / 32);
        this.screenPointY = Math.floor(768 / 32);
        this.scenePointX = 0;
        this.scenePointY = 0;
        this.display;
        this.loopPause = false;
        this.timeStart = 0;
        this.fps = 0.0165;
        this.fpsCount = 0;
        this.currentScene = {};
        this.clickEvents = {};
    }
    addClick(id, obj, action) {
        this.clickEvents[id] = {x : obj.x, y : obj.y, w : obj.w, h : obj.h, 'action' : action};
    }
    displayInit(block, name = 'game-canvas', width = 1366, height = 768) {
        let context = this;
        const display = document.querySelector(block);
        if (display) {
            this.displayWidth = width;
            this.displayHeight = height;
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.id = name;
            canvas.ctx = canvas.getContext('2d')
            canvas.addEventListener('click', function (e) {
                const xz = width / e.target.offsetWidth;
                const yz = height / e.target.offsetHeight;
                const x = (e.pageX - e.target.offsetTop) * xz;
                const y = (e.pageY - e.target.offsetLeft) * yz;
                for (let i in context.clickEvents) {
                    let click = context.clickEvents[i];
                    if (x >= click.x && x <= click.x + click.w && y >= click.y && y <= click.y + click.h) {
                        click.action();
                    }
                }
            });
            display.appendChild(canvas);
            this.display = canvas;
        }
    }
    setScreenPoint(point = 32) {
        this.screenPoint = point;
        this.screenPointX = Math.floor(this.displayWidth / this.screenPoint);
        this.screenPointY = Math.floor(this.displayHeight / this.screenPoint);
    }
    getDisplay() {
        this.display.point = this.screenPoint;
        this.display.pointX = this.screenPointX;
        this.display.pointY = this.screenPointY;
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
    createScene(x, y) {
        this.scenePointX = x;
        this.scenePointY = y;
    }
    createModal(x, y, w, h, content) {
        this.display.ctx.fillStyle = '#ddd';
        this.display.ctx.fillRect(x, y, w, h);
    }
}
export {GWS};