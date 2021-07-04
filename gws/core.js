class GWS {
    constructor () {

    }
    displayInit(block, name = 'game-canvas', width = 1366, height = 768) {
        const display = document.querySelector(block);
        if (display) {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.id = name;
            display.appendChild(canvas);
        }
    }
}
export {GWS};