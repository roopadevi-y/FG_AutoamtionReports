import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

export const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const NODE_COUNT = 60;
    const MAX_DIST = 180;

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 1.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isDark) {
        // Dark: rich navy #1a2744 tone gradient
        const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        bg.addColorStop(0, '#141f38');
        bg.addColorStop(0.35, '#1a2744');
        bg.addColorStop(0.65, '#1e2f52');
        bg.addColorStop(1, '#152038');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Subtle radial highlight at centre
        const radial = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.55
        );
        radial.addColorStop(0, 'rgba(99, 152, 255, 0.12)');
        radial.addColorStop(0.5, 'rgba(60, 100, 200, 0.06)');
        radial.addColorStop(1, 'transparent');
        ctx.fillStyle = radial;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Light: clean white-blue
        const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        bg.addColorStop(0, '#f8faff');
        bg.addColorStop(0.5, '#eef3ff');
        bg.addColorStop(1, '#e4edff');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        // Draw connections
        for (const m of nodes) {
          if (n === m) continue;
          const dx = m.x - n.x;
          const dy = m.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * (isDark ? 0.28 : 0.18);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = isDark
              ? `rgba(59, 130, 246, ${alpha})`
              : `rgba(59, 100, 220, ${alpha})`;
            ctx.lineWidth = isDark ? 0.7 : 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes on top
      for (const n of nodes) {
        const glow = Math.sin(n.pulse) * 0.5 + 0.5;

        if (isDark) {
          // Outer glow
          const radGlow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5);
          radGlow.addColorStop(0, `rgba(59, 130, 246, ${glow * 0.5})`);
          radGlow.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = radGlow;
          ctx.fill();
        }

        // Node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + glow * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(96, 165, 250, ${0.55 + glow * 0.45})`
          : `rgba(59, 100, 220, ${0.35 + glow * 0.25})`;
        ctx.fill();

        // Bright center dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(219,234,254,0.95)' : 'rgba(59, 100, 220, 0.8)';
        ctx.fill();
      }

      // Floating hex circuit shapes (decorative)
      if (isDark) {
        ctx.save();
        ctx.strokeStyle = 'rgba(99, 152, 255, 0.10)';
        ctx.lineWidth = 0.8;
        const hexSize = 90;
        const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 2;
        const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3) * 0.5)) + 2;
        for (let r = -1; r < rows; r++) {
          for (let c = -1; c < cols; c++) {
            const cx = c * hexSize * 1.5;
            const cy = r * hexSize * Math.sqrt(3) * 0.5 + (c % 2 === 0 ? 0 : hexSize * Math.sqrt(3) * 0.25);
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i - Math.PI / 6;
              const px = cx + hexSize * 0.45 * Math.cos(angle);
              const py = cy + hexSize * 0.45 * Math.sin(angle);
              i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
};
