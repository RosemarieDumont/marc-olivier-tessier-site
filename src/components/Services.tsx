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

/* Additional animations for services section */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-bottom {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 1s ease-out;
}

.animate-scale-in {
  animation: scale-in 1s ease-out;
}

.animate-delay-200 {
  animation-delay: 200ms;
}

.animate-delay-400 {
  animation-delay: 400ms;
}

.animate-delay-500 {
  animation-delay: 500ms;
}

.animate-delay-600 {
  animation-delay: 600ms;
}

.section-hidden {
  opacity: 0;
}

.section-visible {
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
}