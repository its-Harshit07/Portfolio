import React, { useEffect, useRef, useState } from 'react';

interface AIBlobCursorProps {
  size?: number;
  hoverSize?: number;
  speed?: number;
}

export const AIBlobCursor: React.FC<AIBlobCursorProps> = ({
  size = 22,
  hoverSize = 38,
  speed = 0.14
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const currentRadius = useRef(size);
  const targetRadius = useRef(size);
  const animFrameId = useRef<number | null>(null);
  const anglePhase = useRef(0);
  const blobPhase = useRef(0);

  useEffect(() => {
    // Check if device has fine pointer (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .skill-badge, .portfolio-tile-link, .cert-card, .btn, .nav-link, .see-more-github-badge, .project-globe-btn'
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    targetRadius.current = isHovered ? hoverSize : size;
  }, [isHovered, size, hoverSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
        // Lerp position for smooth trailing motion
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * speed;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * speed;

        // Lerp size radius
        currentRadius.current += (targetRadius.current - currentRadius.current) * 0.12;

        anglePhase.current += 0.025; // Ring rotation speed
        blobPhase.current += 0.035;  // Inner blob morph speed

        const cx = currentPos.current.x;
        const cy = currentPos.current.y;
        const r = currentRadius.current;

        // ==========================================
        // 1. INNER SOFT GLOWING BLOB (MAGENTA/PINK/PURPLE)
        // ==========================================
        ctx.save();
        ctx.translate(cx, cy);

        const innerRadius = r * 0.52;
        const blobPoints = 8;
        const pts: { x: number; y: number }[] = [];

        for (let i = 0; i < blobPoints; i++) {
          const a = (i / blobPoints) * Math.PI * 2;
          const off =
            Math.sin(blobPhase.current + i * 1.3) * (innerRadius * 0.25) +
            Math.cos(blobPhase.current * 0.9 + i * 2.2) * (innerRadius * 0.15);
          const pr = innerRadius + off;
          pts.push({
            x: Math.cos(a) * pr,
            y: Math.sin(a) * pr
          });
        }

        ctx.beginPath();
        if (pts.length > 0) {
          ctx.moveTo((pts[0].x + pts[blobPoints - 1].x) / 2, (pts[0].y + pts[blobPoints - 1].y) / 2);
          for (let i = 0; i < blobPoints; i++) {
            const next = (i + 1) % blobPoints;
            const midX = (pts[i].x + pts[next].x) / 2;
            const midY = (pts[i].y + pts[next].y) / 2;
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY);
          }
        }
        ctx.closePath();

        // Inner glowing radial gradient (Hot Pink → Magenta → Purple → Transparent)
        const innerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.7);
        innerGlow.addColorStop(0, 'rgba(255, 117, 140, 0.9)');    // Hot Pink
        innerGlow.addColorStop(0.35, 'rgba(255, 0, 127, 0.75)');   // Deep Magenta
        innerGlow.addColorStop(0.7, 'rgba(157, 78, 221, 0.45)');   // Purple
        innerGlow.addColorStop(1, 'rgba(123, 44, 191, 0)');        // Soft transparent edge

        ctx.fillStyle = innerGlow;
        ctx.shadowColor = 'rgba(255, 0, 127, 0.8)';
        ctx.shadowBlur = isHovered ? 22 : 12;
        ctx.fill();

        ctx.restore();

        // ==========================================
        // 2. OUTER ROTATING RGB/RAINBOW GRADIENT RING
        // ==========================================
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(anglePhase.current);

        // Conic gradient around the ring (Cyan → Green → Magenta → Pink → Cyan)
        const ringGradient = ctx.createConicGradient(0, 0, 0);
        ringGradient.addColorStop(0, '#00F2FE');       // Bright Cyan
        ringGradient.addColorStop(0.25, '#00FF87');    // Neon Green
        ringGradient.addColorStop(0.5, '#FF007F');     // Vivid Magenta
        ringGradient.addColorStop(0.75, '#FF758C');    // Hot Pink
        ringGradient.addColorStop(1, '#00F2FE');       // Cyan loop

        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);

        ctx.lineWidth = isHovered ? 2.5 : 2.0;
        ctx.strokeStyle = ringGradient;
        ctx.shadowColor = isHovered ? 'rgba(0, 242, 254, 0.9)' : 'rgba(255, 0, 127, 0.6)';
        ctx.shadowBlur = isHovered ? 16 : 8;
        ctx.stroke();

        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isVisible, isHovered, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="ai-blob-cursor-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        display: isVisible ? 'block' : 'none'
      }}
    />
  );
};
