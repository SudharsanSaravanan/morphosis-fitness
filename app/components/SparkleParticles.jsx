'use client';

import React, { useEffect, useRef } from 'react';

const SparkleParticles = ({
  className = '',
  maxParticleSize = 3,
  minParticleSize = 1,
  particleCount = 50,
  particleColor = '#1DB954',
  backgroundColor = 'transparent',
  animationSpeed = 0.5,
  enableHover = true,
  enableClick = true,
  sparkleOpacity = 0.8
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Particle class
  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
      this.opacity = Math.random() * sparkleOpacity;
      this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.size = minParticleSize + Math.random() * (maxParticleSize - minParticleSize);
      this.speedX = (Math.random() - 0.5) * animationSpeed;
      this.speedY = (Math.random() - 0.5) * animationSpeed;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;

      this.opacity += this.fadeDirection * 0.005;
      if (this.opacity <= 0 || this.opacity >= sparkleOpacity) {
        this.fadeDirection *= -1;
      }

      if (this.x < 0) this.x = this.canvas.width;
      if (this.x > this.canvas.width) this.x = 0;
      if (this.y < 0) this.y = this.canvas.height;
      if (this.y > this.canvas.height) this.y = 0;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      ctx.fillStyle = particleColor;
      ctx.beginPath();

      const spikes = 4;
      const outerRadius = this.size;
      const innerRadius = this.size * 0.4;

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.fill();

      ctx.shadowBlur = this.size * 2;
      ctx.shadowColor = particleColor;
      ctx.fill();

      ctx.restore();
    }
  }

  const initParticles = (canvas) => {
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas));
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    if (!enableHover) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;

    particlesRef.current.forEach(particle => {
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.speedX += dx * force * 0.001;
        particle.speedY += dy * force * 0.001;
      }
    });
  };

  const handleClick = (e) => {
    if (!enableClick) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    for (let i = 0; i < 5; i++) {
      const particle = new Particle(canvas);
      particle.x = clickX + (Math.random() - 0.5) * 20;
      particle.y = clickY + (Math.random() - 0.5) * 20;
      particle.speedX = (Math.random() - 0.5) * 3;
      particle.speedY = (Math.random() - 0.5) * 3;
      particlesRef.current.push(particle);
    }

    if (particlesRef.current.length > particleCount * 2) {
      particlesRef.current.splice(0, particlesRef.current.length - particleCount);
    }
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    initParticles(canvas);
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles(canvas);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, maxParticleSize, minParticleSize, animationSpeed, particleColor, sparkleOpacity]);

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: enableHover || enableClick ? 'auto' : 'none',
        backgroundColor: backgroundColor,
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SparkleParticles;