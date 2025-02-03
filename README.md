
# Fast Track Assignment

### Overview
The project is built with modern web technologies, utilizing React, Vite, and TypeScript to provide a fast and scalable development experience. It integrates various libraries for animation, physics simulation, charting, and routing to enhance interactivity and visualization.

### Features
* Framer Motion & GSAP for smooth animations and transitions.
* Matter.js for physics-based simulations.
* Chart.js for interactive data visualization.

#### Instalation
To set up the project, ensure you have Node.js installed, then run:
```
npm install
```
#### Development
To start the development server:
```
npm run dev
```
#### Building for Production
To build the project:
```
npm run build
```
#### Preview
To preview the production build:
```
npm run preview
```

### Dependencies
Core
* React (react, react-dom)
* React Router (react-router-dom)
* TypeScript

Animations
* GSAP
* Framer Motion

Physics
* Matter.js

Data Visualization
* Chart.js

Development Tools
* Vite
* ESLint

### Key design and animation decisions
* Used mostly custom css for designing the site
* The project embraces a modern dark theme design language, anchored by a deep #1a1a1a background that creates a sophisticated, immersive environment. The visual hierarchy is carefully crafted through a strategic use of yellow accents (#FFE566) that guide attention to key elements, while white and gray tones create depth and readability in the content structure.
* Typography plays a crucial role in the design language, with Oswald font delivering bold, impactful headlines that command attention, while monospace fonts add a technical, precise feel to data labels. Roboto handles body text with clarity and elegance, ensuring comfortable reading across all device sizes.
* The animation philosophy combines physics-based and scroll-triggered interactions to create an engaging yet natural user experience. The bubble chart, powered by Matter.js, introduces playful interactivity with gentle gravity and smooth collisions, making data exploration feel organic and intuitive. Framer Motion handles scroll-based animations, triggering elements as they enter the viewport, while GSAP manages precise numerical animations in the comparison charts, ensuring smooth, synchronized movements that enhance data comprehension.
* The responsive design approach ensures a seamless experience across all devices. Rather than simply scaling down, the layout intelligently adapts using modern CSS Grid and Flexbox, with certain elements conditionally rendering on mobile to maintain optimal performance and usability.

### How are libraries used
* Matter.js drives the physics-based bubble chart (Workshop page), handling complex collision detection and natural movement patterns. We leverage its engine to create floating bubbles with precise gravity and air friction settings, making them feel weightless yet responsive. The library's MouseConstraint feature enables drag interactions, while custom event handlers ensure smooth scrolling coexistence with the physics simulation.
* Framer Motion manages our scroll-based animations and transitions. Its useInView hook detects when elements enter the viewport, triggering animations with curves for natural movement.
* GSAP handles precise numerical animations, especially in the comparison charts. Using useGSAP hook and custom easing functions like "power1.inOut", we animate number counting and ensure smooth transitions. GSAP's timeline feature helps synchronize multiple animations when needed.
* Chart.js handles our data visualizations with its powerful, customizable chart types. 