// Helper function to disable all input events
function disableInputs(element) {
const eventTypes = ['mousedown', 'mouseup', 'mousemove', 'keydown', 'keyup'];

eventTypes.forEach((eventType) => {
    element.addEventListener(eventType, function (e) {
    e.preventDefault();
    e.stopPropagation();
    }, { passive: false, capture: true });
});
}

// Helper function to cut visuals for all canvas elements
function cutVisuals() {
const canvases = document.querySelectorAll('canvas');
canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
}

// Helper function to cut visuals for minesweeper game
function cutMinesweeperVisuals() {
const minesweeperElements = document.querySelectorAll('.minesweepMenu, .minesweepBoard');
minesweeperElements.forEach(element => {
    element.style.display = 'none';
});
}

// Main function to initialize the kill switch
function initKillSwitch() {
    const elements = document.querySelectorAll('canvas, .minesweepMenu, .minesweepBoard');

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0.8';
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.remove();
        elements.forEach(element => {
            disableInputs(element);
        });
        cutVisuals();
        cutMinesweeperVisuals();
        disableKeyboardEvents();
        alert('Demo time expired. Please purchase the full version to continue playing.');
    }, 20000); // 2 minutes in milliseconds
}

function cutVisuals() {
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0.8';
    document.body.appendChild(overlay);
}

// Call the initKillSwitch function
initKillSwitch();
cutVisuals();