const rmax = 1.3;
const rmul = 25;

export class Fireflies {
  constructor(canvas, count) {
    this.canvas = canvas;
    this.interval = 25;

    this.fireflies = [ ];
    for (let i = 0; i < count; i++) {
      this.fireflies.push(new Firefly(canvas, this.interval));
    }
    this.timer = null;
  }

  start() {
    if (this.timer) { return; }

    this.timer = setInterval(this.draw.bind(this), this.interval);
  }

  stop() {
    if (!this.timer) { return; }

    clearInterval(this.timer);
    this.timer = null;
  }

  draw() {
    for (const firefly of this.fireflies) {
      firefly.draw();
    }
  }
}

class Firefly {
  constructor(canvas, interval) {
    this.interval = interval;
    this.div = document.createElement("div");
    this.div.className = "firefly";
    canvas.appendChild(this.div);
    this.reset(true);
    this.t0 = Math.random() * this.lifespan;
  }

  reset(init) {
    this.x = Math.random() * document.body.clientWidth;
    this.y = Math.random() * document.body.clientHeight;
    this.radius = ((rmax - 1) * Math.random()) + 1;

    const v = 0.2 + 0.8 * Math.random();
    const a = Math.PI * 2 * Math.random();
    this.dx = 3 * v * Math.cos(a);
    this.dy = 1 * v * Math.sin(a);

    var ttl = 5000 + Math.random() * 6000;

    this.halflife = (ttl / this.interval) * (this.radius / rmax);
    if (init) {
      this.rt = Math.random() * this.halflife;
    } else {
      this.rt = this.halflife;
    }
    this.drt = -(Math.random() + 1);

    this.gradientStop = (Math.random() * 10) + 20;
  }

  draw() {
    // Next Step
    this.rt += this.drt;

    if (this.rt >= this.halflife) {
        this.reset();
        return 1;
    }

    var alpha = this.rt / this.halflife;

    // Move
    this.x += alpha * this.dx;
    this.y += alpha * this.dy;

    if (this.rt <= 0 || this.rt >= this.halflife) {
      this.drt = this.drt * -1;
    }

    const opacity = 0.8 * (1 - alpha);

    let cr = this.radius * opacity;
    if (cr < 1) { cr = 1; }
    cr *= rmul;

    this.div.style.transform = `Translate(${ this.x }px, ${ this.y }px)`;
    this.div.style.height = `${ cr }px`;
    this.div.style.width = `${ cr }px`;
    this.div.style.background = `radial-gradient(circle, rgba(208,230,108,${ opacity }) 0%, rgba(208,230,108,${ 0.2 * opacity }) ${ Math.trunc(this.gradientStop) }%, rgba(208,230,108,0) 50%)`;

    return 0;
  }
}
