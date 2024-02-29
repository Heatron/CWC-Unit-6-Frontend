import React, { useEffect, useRef } from 'react';

interface Mouse {
  x: number | undefined;
  y: number | undefined;
  radius: number;
}

class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = 4;
    this.baseX = this.x;
    this.baseY = this.y;
    this.speed = Math.random() * 20 + 5;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: Mouse): void {
    let dx = (mouse.x ?? 0) - this.x;
    let dy = (mouse.y ?? 0) - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius) {
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance; // Normalized force
      let directionX = forceDirectionX * force * this.speed;
      let directionY = forceDirectionY * force * this.speed;

      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

export default function LineDrawer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Mouse>({ x: undefined, y: undefined, radius: 150 });
  const particleDistance = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];

    const resizeReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles.length = 0;
      for (let y = (((canvas.height - particleDistance) % particleDistance) + particleDistance) / 2; y < canvas.height; y += particleDistance) {
        for (let x = (((canvas.width - particleDistance) % particleDistance) + particleDistance) / 2; x < canvas.width; x += particleDistance) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update(mouseRef.current);
        particle.draw(ctx);
      });
      drawLines();
    };

    const drawLines = () => {
        const dotRadius = 3; // Adjust the radius of the dots as needed
        for (let i = 0; i < particles.length; i++) {
            ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // Adjust dot color and opacity as needed
            ctx.beginPath();
            ctx.arc(particles[i].x, particles[i].y, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    const animationLoop = () => {
      drawScene();
      requestAnimationFrame(animationLoop);
    };

    resizeReset();
    animationLoop();

    const mousemove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const mouseout = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };

    window.addEventListener('resize', resizeReset);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseout', mouseout);

    return () => {
      window.removeEventListener('resize', resizeReset);
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseout', mouseout);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full line-snap-gradient-bg"></canvas>;
}
