@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

html {
  scroll-behavior: smooth;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-delay {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in-delay 1s ease-out 0.3s both;
}

@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-loading-bar {
  animation: loading-bar 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 3s ease-in-out infinite 1.5s;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.animate-scroll-horizontal {
  animation: scroll-horizontal 30s linear infinite;
}

.animate-scroll-horizontal:hover {
  animation-play-state: paused;
}

/* Smooth scroll transitions with refined easing */
html {
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
/* Smooth scroll transitions with refined easing */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

/* Section reveal animations */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section animation classes */
.animate-slide-in-left {
  animation: slideInFromLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInFromRight 0.8s ease-out forwards;
}

.animate-slide-in-bottom {
  animation: slideInFromBottom 0.8s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Staggered animation delays */
.animate-delay-100 {
  animation-delay: 0.1s;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}

/* Intersection Observer ready states */
.section-hidden {
  opacity: 0;
  transform: translateY(40px);
}

.section-visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced hover effects for navigation */
.nav-link {
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #1e40af);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

/* Smooth page transitions */
.page-transition {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
/* House construction animations */
@keyframes draw-foundation {
  0% {
    stroke-dashoffset: 200;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes draw-walls {
  0% {
    stroke-dashoffset: 300;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes draw-roof {
  0% {
    stroke-dashoffset: 250;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes draw-details {
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.animate-draw-foundation {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-foundation 3s ease-in-out 1s forwards;
}

.animate-draw-walls {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw-walls 4s ease-in-out 3s forwards;
}

.animate-draw-roof {
  stroke-dasharray: 250;
  stroke-dashoffset: 250;
  animation: draw-roof 3s ease-in-out 6s forwards;
}

.animate-draw-details {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw-details 2s ease-in-out 8s forwards;
}