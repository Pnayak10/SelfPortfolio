import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'header-app',
  standalone: true,
  imports: [],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.scss'
})
export class HeaderAppComponent implements AfterViewInit {
  constructor() {

  }

  exploreWork() {
    alert("Let\'s explore!");
}
ngAfterViewInit(): void {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  document.querySelector('.animated-header')?.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = 100;

  const particles: any[] = [];

  class Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    velocityX: number;

    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3;
      this.color = 'rgba(255, 255, 255, 0.5)';
      this.velocityX = Math.random() * 2 - 1;
    }

    update() {
      this.x += this.velocityX;
      if (this.x > canvas.width) this.x = 0;
    }

    draw() {
      if (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
  }

  function initParticles() {
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
  }

  initParticles();
  animate();
}
}
 

