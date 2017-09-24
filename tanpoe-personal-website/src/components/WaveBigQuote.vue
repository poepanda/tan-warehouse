<template>
  <div v-bind:id="canvasID" class="wave-big-quote">
    <canvas v-bind:id="canvasID"
  </div>
</template>

<script>
let canvas;
let context;
const wave1 = [];
const wave2 = [];
const wave3 = [];
const mouse = { x: innerWidth * 0.5, y: innerHeight * 0.5 };
const FPS = 60;
const canvasHeight = 200;
let angle = 0;
let mouseDown = true;
let interactive = true;

/*
 * Checks if browser supports canvas element.
 */

function isCapable() {
  return !!canvas.getContext && !!canvas.getContext('2d');
}

const requestAnimFrame = (function requestAnimeFrame() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||

    function requestFrameFallback(callback) {
      window.setTimeout(callback, 1000 / FPS);
    };
}());

/*
 * On resize window event.
 */

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = canvasHeight;
}

/*
 * Mouse down event.
 */

function onMouseDown(event) {
  event.preventDefault();
  mouseDown = true;
}

/*
 * Mouse up event.
 */

function onMouseUp(event) {
  event.preventDefault();
  mouseDown = false;
}

/*
 * Mouse move event.
 */

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = event.pageX - canvas.offsetLeft;
  mouse.y = event.pageY - canvas.offsetTop;
  if (interactive) {
    mouseDown = false;
    interactive = false;
  }
}

/*
 * Touch start event.
 */

function onTouchStart(event) {
  event.preventDefault();
  mouseDown = true;
}

/*
 * Touch end event.
 */

function onTouchEnd(event) {
  event.preventDefault();
  mouseDown = false;
}

/*
 * Touch move event.
 */

function onTouchMove(event) {
  event.preventDefault();

  mouse.x = event.touches[0].pageX - canvas.offsetLeft;
  mouse.y = event.touches[0].pageY - canvas.offsetTop;

  if (interactive) {
    mouseDown = false;
    interactive = false;
  }
}

/*
 * Clear the whole screen.
 */

function clear() {
  context.clearRect(0, 0, innerWidth, innerHeight);
}

/*
 * Distance between two wave1.
 */

function distanceTo(pointA, pointB) {
  const dx = Math.abs(pointA.x - pointB.x);
  const dy = Math.abs(pointA.y - pointB.y);

  return Math.sqrt((dx * dx) + (dy * dy));
}

/*
 * Update the waves.
 */

function update() {
  const friction = 0.99;
  const threshold = interactive ? Math.round(canvas.width / 4.5) : 280;

  if (interactive) {
    angle += 0.05;

    mouse.x = (canvas.width * 0.5) + (Math.sin(angle) * canvas.width * 0.2);
    mouse.y = ((canvas.height * 0.5) - 50) + (Math.sin(angle) * canvas.height * 0.2);
  }

  for (let index = 0; index < (wave1.length || wave2.length || wave3.length); index += 1) {
    const point1 = wave1[index];
    const point2 = wave2[index];
    const point3 = wave3[index];

    point1.y += point1.vy;
    point2.y += point2.vy;
    point3.y += point3.vy;

    // Ease
    point1.vy += (point1.depth - point1.y) * (interactive ? 0.03 : 0.009);
    point2.vy += (point2.depth - point2.y) * (interactive ? 0.02 : 0.008);
    point3.vy += (point3.depth - point3.y) * (interactive ? 0.01 : 0.007);

    // Friction
    point1.vy *= friction;
    point2.vy *= friction;
    point3.vy *= friction;

    // Threshold
    if (distanceTo(mouse, point1) < threshold && mouseDown) {
      point1.vy += (mouse.y - point1.y) * (interactive ? 0.03 : 0.009);
    }

    if (distanceTo(mouse, point2) < threshold && mouseDown) {
      point2.vy += (mouse.y - point2.y) * (interactive ? 0.02 : 0.008);
    }

    if (distanceTo(mouse, point3) < threshold && mouseDown) {
      point3.vy += (mouse.y - point3.y) * (interactive ? 0.01 : 0.007);
    }
  }
}

/*
 * Render the waveS.
 */

function render() {
  let waveIndex = 0;
  for (waveIndex; waveIndex < (wave1.length || wave2.length || wave3.length); waveIndex += 1) {
    // Smooth bezier curves
    clear();

    context.save();
    context.globalAlpha = 0.5;
    context.fillStyle = '#f98f00';
    context.beginPath();

    context.moveTo(wave1[0].x, wave1[0].y);
    // Draw through N wave1
    for (let N = 1; N < wave1.length - 2; N += 1) {
      const xc = (wave1[N].x + wave1[N + 1].x) / 2;
      const yc = (wave1[N].y + wave1[N + 1].y) / 2;

      context.quadraticCurveTo(wave1[N].x, wave1[N].y, xc, yc);
    }

    context.quadraticCurveTo(
      wave1[wave1.length - 2].x,
      wave1[wave1.length - 2].y,
      wave1[wave1.length - 1].x,
      wave1[wave1.length - 1].y,
    );
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(0, canvas.height);
    context.lineTo(0, wave1[0].y);
    context.fill();
    context.restore();

    context.save();
    context.globalAlpha = 0.5;
    context.fillStyle = '#00fddc';
    context.beginPath();

    context.moveTo(wave2[0].x, wave2[0].y);

    // Draw through N wave2
    for (let N = 1; N < wave2.length - 2; N += 1) {
      const xc = (wave2[N].x + wave2[N + 1].x) / 2;
      const yc = (wave2[N].y + wave2[N + 1].y) / 2;

      context.quadraticCurveTo(wave2[N].x, wave2[N].y, xc, yc);
    }

    context.quadraticCurveTo(
      wave2[wave2.length - 2].x,
      wave2[wave2.length - 2].y,
      wave2[wave2.length - 1].x,
      wave2[wave2.length - 1].y,
    );
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(0, canvas.height);
    context.lineTo(0, wave2[0].y);
    context.fill();
    context.restore();

    context.save();
    context.globalAlpha = 0.5;
    context.fillStyle = '#00fddc';
    context.beginPath();

    context.moveTo(wave3[0].x, wave3[0].y);

    // Draw through N wave3
    for (let N = 1; N < wave3.length - 2; N += 1) {
      const xc = (wave3[N].x + wave3[N + 1].x) / 2;
      const yc = (wave3[N].y + wave3[N + 1].y) / 2;

      context.quadraticCurveTo(wave3[N].x, wave3[N].y, xc, yc);
    }

    context.quadraticCurveTo(
      wave3[wave3.length - 2].x,
      wave3[wave3.length - 2].y,
      wave3[wave3.length - 1].x,
      wave3[wave3.length - 1].y,
    );
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(0, canvas.height);
    context.lineTo(0, wave3[0].y);
    context.fill();
    context.restore();
  }
}

/*
 * Loop logic.
 */
function wave() {
  clear();
  update();
  render();

  requestAnimFrame(wave);
}

/*
 * Create waves.
 */
function createWaves() {
  const totalPoints = Math.round(canvas.width / 170);
  for (let quantity = 0, len = totalPoints; quantity < len; quantity += 1) {
    // First wave
    wave1.push({
      x: (canvas.width * quantity) / (len - 1),
      y: (canvas.height * 0.5) - 20,
      vy: Math.random() * 10,
      depth: canvas.height * 0.5,
    });
  }

  for (let quantity = 0, len = totalPoints; quantity < len; quantity += 1) {
    // Second wave
    wave2.push({
      x: (canvas.width * quantity) / (len - 1),
      y: canvas.height * 0.5,
      vy: Math.random() * 10,
      depth: canvas.height * 0.5,
    });
  }

  for (let quantity = 0, len = totalPoints; quantity < len; quantity += 1) {
    // Third wave
    wave3.push({
      x: (canvas.width * quantity) / (len - 1),
      y: (canvas.height * 0.5) + 20,
      vy: Math.random() * 10,
      depth: canvas.height * 0.5,
    });
  }
  wave();
}

/*
 * Request new frame by Paul Irish.
 * 60 FPS.
 */

export default {
  data() {
    return {
      canvasID: `wave-canvas-${Math.floor(Math.random() * 10000)}`,
    };
  },
  methods: {
    initWave() {
      const container = document.querySelector(`#${this.canvasID}`);

      canvas = document.createElement('canvas');
      canvas.width = innerWidth;
      canvas.height = canvasHeight;

      canvas.style.position = 'absolute';
      canvas.style.top = 0;
      canvas.style.bottom = 0;
      canvas.style.left = 0;
      canvas.style.right = 0;
      canvas.style.zIndex = 11;
      canvas.style.cursor = 'n-resize';

      container.appendChild(canvas);
      // Browser supports canvas?

      if (isCapable()) {
        context = canvas.getContext('2d');

        // Events
        if ('ontouchmove' in window) {
          canvas.addEventListener('touchstart', onTouchStart, false);
          canvas.addEventListener('touchend', onTouchEnd, false);
          canvas.addEventListener('touchmove', onTouchMove, false);
        } else {
          canvas.addEventListener('mousedown', onMouseDown, false);
          canvas.addEventListener('mouseup', onMouseUp, false);
          canvas.addEventListener('mousemove', onMouseMove, false);
        }

        window.onresize = onResize;
        createWaves();
      } else {
        console.error('Please, update your browser for seeing this animation.');
      }
    },
  },
  mounted() {
    this.initWave();
  },
};
</script>

<style>
.wave-big-quote {
  height: 300px;
  overflow: hidden;
  display: block;
  position: relative;
}
</style>
