"use client";
import { useEffect, useRef } from "react";

const AnimatedLines = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      time: number;
      radius: number;
      opacity: number;
    };

    let particles: Particle[] = [];
    let lastX = 0;
    let lastY = 0;

    const colors = [
      "#FF4D4D", "#FFB84D", "#FFFF4D", "#4DFF4D",
      "#4DFFFF", "#4D4DFF", "#B84DFF", "#FF4DA6",
    ];
    let colorIndex = 0;
    let lastColorChange = Date.now();
    const colorDuration = 5000; // 5s per color

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      const vx = dx * 0.25;
      const vy = dy * 0.25;

      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx,
        vy,
        time: now,
        radius: 1,
        opacity: 1,
      });

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      particles = particles.filter((p) => now - p.time < 2000);

      // 🌈 update color every 5s
      if (now - lastColorChange > colorDuration) {
        colorIndex = (colorIndex + 1) % colors.length;
        lastColorChange = now;
      }
      const color = colors[colorIndex];

      particles.forEach((p, i) => {
        // move particle
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;

        // expansion + fading
        p.radius += 0.5;
        p.opacity -= 0.01;

        if (i === 0) return;
        const prev = particles[i - 1];

        // Head brighter, tail faded
        const fadeFactor = i / particles.length;

        ctx.strokeStyle = color;
        ctx.lineWidth = 2 + p.radius * 0.05;
        ctx.globalAlpha = Math.max(p.opacity * fadeFactor, 0);

        ctx.shadowBlur = 50 * fadeFactor; // stronger glow near head
        ctx.shadowColor = color;

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(p.x, p.y); // ✅ simple line, no extra curves
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10" />
  );
};

export default AnimatedLines;
