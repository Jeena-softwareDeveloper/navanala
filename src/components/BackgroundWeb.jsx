import React, { useEffect, useRef } from 'react';

const BackgroundWeb = ({ className = "fixed inset-0" }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Guard clause
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let waves = [];

        // Optimization: Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const shouldReduceMotion = mediaQuery.matches;

        const init = () => {
            if (!canvas) return;
            // Function to get accurate size based on parent container
            const parent = canvas.parentElement;
            width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
            height = canvas.height = parent ? parent.clientHeight : window.innerHeight;

            // Initialize waves - Reduce count for mobile to optimize performance
            const isMobile = width < 768;
            waves = [];
            const waveCount = isMobile ? 3 : 5; // Fewer waves on mobile

            for (let i = 0; i < waveCount; i++) {
                waves.push({
                    y: height / 2,
                    length: 0.005 + Math.random() * 0.005,
                    amplitude: (isMobile ? 30 : 50) + Math.random() * 100, // Smaller amplitude on mobile
                    speed: 0.02 + Math.random() * 0.02,
                    offset: Math.random() * Math.PI * 2,
                    color: `rgba(99, 102, 241, ${0.1 + Math.random() * 0.2})`
                });
            }
        };

        const draw = (time) => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            if (shouldReduceMotion) return; // Stop drawing if reduced motion is on

            // Draw grid points - Only on desktop for performance
            if (width > 768) {
                ctx.fillStyle = 'rgba(200, 210, 255, 0.3)';
                const gridSize = 60; // Larger grid for better perf
                for (let x = 0; x < width; x += gridSize) {
                    for (let y = 0; y < height; y += gridSize) {
                        if (Math.random() > 0.99) ctx.fillRect(x, y, 2, 2);
                    }
                }
            }

            // Draw Waves
            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, height / 2);

                for (let x = 0; x < width; x += 2) { // Skip pixels for performance
                    // Simplify calculation
                    const y = wave.y + Math.sin(x * wave.length + wave.offset) * wave.amplitude * Math.sin(time * 0.001);
                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 2;
                ctx.stroke();

                // Move wave
                wave.offset += wave.speed;
            });

            animationFrameId = requestAnimationFrame(() => draw(Date.now()));
        };

        window.addEventListener('resize', init);
        init();
        draw(Date.now());

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`${className} z-0 pointer-events-none opacity-60`}
            style={{ touchAction: 'none' }} // Improve scrolling performance over canvas
        />
    );
};

export default BackgroundWeb;
