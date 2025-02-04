import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './BubbleChart.css';

interface Bubble {
    id?: string;
    text: string;
    size: number;
    color: 'yellow' | 'white' | 'gray';
}

const BubbleChart: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
    
    const bubbles: Bubble[] = [
        { id: '01', text: 'LUXURY', size: 160, color: 'yellow' },
        { id: '02', text: 'RETAIL', size: 140, color: 'yellow' },
        { id: '03', text: 'ORIGINALITY', size: 140, color: 'yellow' },
        { text: 'LUXURY', size: 100, color: 'white' },
        { text: 'MALTA', size: 100, color: 'white' },
        { text: 'LEADER', size: 100, color: 'white' },
        { text: 'BEST', size: 80, color: 'gray' },
        { text: 'EXPERIENCE', size: 80, color: 'gray' },
        { text: 'CUSTOMERS', size: 80, color: 'gray' },
        { text: 'NEW', size: 60, color: 'gray' },
        { text: 'RETAIL', size: 60, color: 'gray' },
        { text: 'PLANET', size: 60, color: 'gray' },
        { text: 'MOST', size: 40, color: 'gray' },
        { text: 'LOVE', size: 60, color: 'white' },
        { text: 'DIVERSITY', size: 60, color: 'white' },
        { text: 'LEADER', size: 100, color: 'white' }
    ];

    useEffect(() => {
        const {
            Engine,
            Render,
            Runner,
            Bodies,
            Composite,
            Mouse,
            MouseConstraint,
            Common,
            Events
        } = Matter;

        // Create engine with gentle gravity
        const engine = Engine.create({
            gravity: { x: 0, y: 0.4 }  // Added gentle gravity
        });

        // Fixed canvas size with reduced height
        const canvasWidth = 800;
        const canvasHeight = 450;  // Reduced height

        // Create renderer
        const render = Render.create({
            element: sceneRef.current!,
            engine: engine,
            options: {
                width: canvasWidth,
                height: canvasHeight,
                wireframes: false,
                background: '#1a1a1a',
                pixelRatio: 2
            }
        });

        // Create bubbles with adjusted initial positions for smaller height
        const circleBodies = bubbles.map((bubble) => {
            const body = Bodies.circle(
                Common.random(bubble.size, canvasWidth - bubble.size),
                Common.random(bubble.size, canvasHeight * 0.7), // Start bubbles higher
                bubble.size / 2,
                {
                    restitution: 0.7, // Slightly reduced bounciness
                    friction: 0.001,
                    frictionAir: 0.005,
                    density: 0.001,
                    render: {
                        fillStyle: bubble.color === 'yellow' ? '#fff469' : 
                                  bubble.color === 'white' ? '#ffffff' : 
                                  '#808080'
                    }
                }
            );
            return body;
        });

        // Modified mouse control with wheel event handling
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        mouseConstraintRef.current = mouseConstraint;

        // Allow wheel scrolling when not dragging
        render.canvas.addEventListener('wheel', (e: WheelEvent) => {
            const isDragging = mouseConstraint.body !== null;
            if (!isDragging) {
                e.preventDefault(); // Prevent default only if dragging
                window.scrollBy({
                    top: e.deltaY,
                    behavior: 'smooth'
                });
            }
        }, { passive: false });

        // Handle mouse down to determine drag intent
        render.canvas.addEventListener('mousedown', (e: MouseEvent) => {
            const bodies = Composite.allBodies(engine.world);
            const mousePosition = { x: e.offsetX, y: e.offsetY };
            const foundBody = bodies.find(body => {
                return Matter.Bounds.contains(body.bounds, mousePosition);
            });

            if (!foundBody) {
                // If not clicking a bubble, disable mouse events temporarily
                mouseConstraint.mouse.element.removeEventListener('wheel', handleWheel);
            }
        });

        // Re-enable mouse constraint on mouse up
        render.canvas.addEventListener('mouseup', () => {
            mouseConstraint.mouse.element.addEventListener('wheel', handleWheel);
        });

        const handleWheel = (e: Event) => {
            if (e instanceof WheelEvent) {
                e.preventDefault();
                window.scrollBy({
                    top: e.deltaY,
                    behavior: 'smooth'
                });
            }
        };

        // Create boundaries with higher restitution for bouncier collisions
        const walls = [
            Bodies.rectangle(canvasWidth / 2, -10, canvasWidth, 20, { 
                isStatic: true, 
                restitution: 0.7,
                render: { fillStyle: 'transparent' }
            }),
            Bodies.rectangle(canvasWidth / 2, canvasHeight + 10, canvasWidth, 20, { 
                isStatic: true, 
                restitution: 0.7,
                render: { fillStyle: 'transparent' }
            }),
            Bodies.rectangle(-10, canvasHeight / 2, 20, canvasHeight, { 
                isStatic: true, 
                restitution: 0.7,
                render: { fillStyle: 'transparent' }
            }),
            Bodies.rectangle(canvasWidth + 10, canvasHeight / 2, 20, canvasHeight, { 
                isStatic: true, 
                restitution: 0.7,
                render: { fillStyle: 'transparent' }
            })
        ];

        // Add all objects to world
        Composite.add(engine.world, [...circleBodies, ...walls, mouseConstraint]);
        render.mouse = mouse;

        // Custom render function for text with improved text fitting
        Events.on(render, 'afterRender', () => {
            const ctx = render.context;
            circleBodies.forEach((body, index) => {
                const bubble = bubbles[index];
                ctx.save();
                ctx.translate(body.position.x, body.position.y);
                ctx.rotate(body.angle);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Calculate maximum text size that will fit in bubble
                const radius = bubble.size / 2;
                const maxWidth = radius * 1.4; // Leave some padding
                
                // Start with a size proportional to bubble size
                let fontSize = bubble.size * 0.25; // Reduced from 0.3
                ctx.font = `bold ${fontSize}px "Oswald", sans-serif`;
                
                // Measure text and scale down if needed
                let textWidth = ctx.measureText(bubble.text).width;
                if (textWidth > maxWidth) {
                    fontSize = fontSize * (maxWidth / textWidth);
                    ctx.font = `bold ${fontSize}px "Oswald", sans-serif`;
                }

                // Draw ID if exists
                if (bubble.id) {
                    const idFontSize = fontSize * 0.4;
                    ctx.font = `${idFontSize}px monospace`;
                    ctx.fillStyle = bubble.color === 'yellow' ? '#000000' : '#1a1a1a';
                    ctx.fillText(`[${bubble.id}]`, 0, -radius * 0.4);
                }
                
                // Draw main text
                ctx.font = `bold ${fontSize}px "Oswald", sans-serif`;
                ctx.fillStyle = bubble.color === 'yellow' ? '#000000' : '#1a1a1a';
                
                // Handle long text with line breaks if needed
                const words = bubble.text.split(' ');
                if (words.length > 1 && bubble.size < 100) {
                    const lineHeight = fontSize * 0.9;
                    let currentY = words.length > 2 ? -lineHeight : 0;
                    
                    words.forEach((word) => {
                        ctx.fillText(word, 0, currentY);
                        currentY += lineHeight;
                    });
                } else {
                    ctx.fillText(bubble.text, 0, bubble.id ? radius * 0.1 : 0);
                }
                
                ctx.restore();
            });
        });

        // Run the engine and renderer
        Runner.run(Runner.create(), engine);
        Render.run(render);

        // Cleanup
        return () => {
            Render.stop(render);
            Engine.clear(engine);
            render.canvas.remove();
            mouseConstraintRef.current = null;
        };
    }, []);

    return (
        <div className="bubble-chart">
            <div className="question-section">
                <h1 className="question-title">
                    <span className="highlight">WHAT </span><br />
                    KEEPS YOU <br />
                    AWAKE AT <br />
                    NIGHT?
                </h1>
                <p className="legend">*LEGEND: STUDY FROM 2024 WORKSHOP GROUP</p>
            </div>
            <div 
                ref={sceneRef} 
                className="scene-container"
                onWheel={(e) => {
                    if (!mouseConstraintRef.current?.body) {
                        // If not dragging a bubble, allow normal scroll
                        e.currentTarget.style.pointerEvents = 'none';
                        const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
                        elementBelow?.dispatchEvent(new WheelEvent('wheel', {
                            deltaY: e.deltaY,
                            bubbles: true
                        }));
                        e.currentTarget.style.pointerEvents = 'auto';
                    }
                }}
            />
        </div>
    );
};

export default BubbleChart; 