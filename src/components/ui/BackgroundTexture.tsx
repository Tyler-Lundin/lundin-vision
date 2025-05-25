"use client";
import { cn } from '@/lib/utils';

interface BackgroundTextureProps {
  className?: string;
}

export function BackgroundTexture({ className }: BackgroundTextureProps) {
  // Generate 16 random positions and sizes for the dots
  const dots = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 15) + 40, // Random size between 1px and 16px
    x: Math.random() * 100, // Random x position (0-100%)
    y: Math.random() * 100, // Random y position (0-100%)
    delay: Math.random() * 5, // Random delay (0-5s)
    duration: 10 + Math.random() * 10, // Random duration (10-20s)
  }));

  return (
    <div
      className={cn(
        'fixed inset-0 scale-150 blur-lg select-none pointer-events-none overflow-hidden',
        'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent',
        className
      )}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animation: `float ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
          }
          50% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
          }
          75% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
          }
        }
      `}</style>
    </div>
  );
} 