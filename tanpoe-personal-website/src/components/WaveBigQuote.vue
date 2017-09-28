<template>
  <div class="wave-big-quote">
    <div v-bind:id="canvasID" class="top-wave"></div>
    <div class="wave-big-quote__quote" style="text-align: center">
      Hey! My name is Tan.
      My biggest is to create something that can facilitate people to help other people.
    </div>
    <div class="wave-big-quote__bottom"></div>
  </div>
</template>

<script>
let canvas;
let context;
let wave1 = [];
let wave2 = [];
let wave3 = [];
const mouse = { x: innerWidth * 0.5, y: innerHeight * 0.5 };
const FPS = 60;
const canvasHeight = 120;
let angle = 0;
const interactive = true;
let resetWave = true;
let requestAnimFrameID = null;
// A fallback request Animation frame
let requestAnimTimeout = null;

/*
 * Checks if browser supports canvas element.
 */

function isCapable() {
  return !!canvas.getContext && !!canvas.getContext('2d');
}

/*
 * Request new frame by Paul Irish.
 * 60 FPS.
 */
const requestAnimFrame = (function requestAnimeFrame() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||

    function requestFrameFallback(callback) {
      requestAnimTimeout = window.setTimeout(callback, 1000 / FPS);
    };
}());

/*
* Cancel Request animation
*/
const cancelAnimFrame = (function cancelAnimFrame() {
  return window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||

    function cancelAnimFrameFallback() {
      window.clearTimeout(requestAnimTimeout);
    };
}());

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
  const friction = 0.82;
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
    if (distanceTo(mouse, point1) < threshold) {
      point1.vy += (mouse.y - point1.y) * (interactive ? 0.03 : 0.009);
    }

    if (distanceTo(mouse, point2) < threshold) {
      point2.vy += (mouse.y - point2.y) * (interactive ? 0.02 : 0.008);
    }

    if (distanceTo(mouse, point3) < threshold) {
      point3.vy += (mouse.y - point3.y) * (interactive ? 0.01 : 0.007);
    }
  }
}

/*
 * Render waves .
 */
function render() {
  let waveIndex = 0;
  for (waveIndex; waveIndex < (wave1.length || wave2.length || wave3.length); waveIndex += 1) {
    // Smooth bezier curves
    clear();

    context.save();
    context.globalAlpha = 0.5;
    context.fillStyle = '#00FDDC';
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
    context.fillStyle = '#00FDDC';
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
    context.fillStyle = '#00FDDC';
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
 * looping recursively to render and update waves
 */
function wave() {
  clear();
  update();
  render();
  if (!resetWave) {
    requestAnimFrameID = requestAnimFrame(wave);
  }
}

/*
 * Create waves.
 */
function createWaves() {
  // const totalPoints = Math.round(canvas.width / 170);
  const totalPoints = 7;
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

      container.innerHTML = '';
      container.appendChild(canvas);
      // Browser supports canvas?

      if (isCapable()) {
        context = canvas.getContext('2d');

        window.onresize = null;
        window.onresize = this.onResize;
        wave1 = [];
        wave2 = [];
        wave3 = [];
        angle = 0;
        // Cancel the animation frame request if it exists
        if (requestAnimFrameID) {
          cancelAnimFrame(requestAnimFrameID);
        }
        // This is used in wave function, to stop recursively calling wave()
        resetWave = false;

        createWaves();
      } else {
        console.error('Please, update your browser for seeing this animation.');
      }
    },
    onResize() {
      canvas.width = window.innerWidth;
      canvas.height = canvasHeight;
      resetWave = true;
      this.initWave();
    },
  },
  mounted() {
    this.initWave();
  },
};
</script>

<style lang="less">
@import (reference) '../theme.less';

.wave-big-quote {
  padding-top: 100px;
  overflow: hidden;
  display: block;
  position: relative;
}
.wave-big-quote__quote {
  background-color: @green_high_light;
  color: #444444;
  padding: 20px 40px;
  font-size: 2.2em;
  line-height: 1.8em;
  white-space: pre-line;
}
.wave-big-quote__bottom {
  background: linear-gradient(@green_high_light, white);
  height: 160px;
}
</style>
