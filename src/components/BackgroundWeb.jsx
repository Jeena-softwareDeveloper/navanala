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

        const init = () => {
            if (!canvas) return;
            // Function to get accurate size based on parent container
            const parent = canvas.parentElement;
            width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
            height = canvas.height = parent ? parent.clientHeight : window.innerHeight;

            // Initialize waves
            waves = [];
            const waveCount = 5;
            for (let i = 0; i < waveCount; i++) {
                waves.push({
                    y: height / 2,
                    length: 0.005 + Math.random() * 0.005, // Frequency
                    amplitude: 50 + Math.random() * 100,
                    speed: 0.02 + Math.random() * 0.02,
                    offset: Math.random() * Math.PI * 2, // Phase shift
                    color: `rgba(99, 102, 241, ${0.1 + Math.random() * 0.2})` // Indigo variation
                });
            }
        };

        const draw = (time) => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw grid points for tech feel (optional, let's keep it clean with just waves or add a static grid)
            // Let's add a subtle static grid first
            ctx.fillStyle = 'rgba(200, 210, 255, 0.3)';
            const gridSize = 40;
            for (let x = 0; x < width; x += gridSize) {
                for (let y = 0; y < height; y += gridSize) {
                    if (Math.random() > 0.98) ctx.fillRect(x, y, 2, 2); // Occasional sparkles
                }
            }

            // Draw Waves
            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, height / 2);

                for (let x = 0; x < width; x++) {
                    const y = wave.y + Math.sin(x * wave.length + wave.offset) * wave.amplitude * Math.sin(time * 0.001);
                    // We modulate amplitude with time for "breathing" effect
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
        />
    );
};

export default BackgroundWeb;
