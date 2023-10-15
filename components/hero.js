import { useEffect, useRef } from "react";

function Hero() {
  const shapesRef = useRef(null);

  useEffect(() => {
    const container = shapesRef.current;
    const particles = [];

    for (let i = 0; i < 20; i++) {
      const div = document.createElement("div");
      const size = Math.random() * 50 + 10;
      const left = Math.random() * 90 + 5; // 5% to 95%
      const top = Math.random() * 90 + 5; // 5% to 95%

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.borderRadius = "50%";
      div.style.position = "absolute";
      div.style.left = `${left}%`;
      div.style.top = `${top}%`;
      div.style.background = "rgba(173, 216, 230, 0.2)"; // Light blue with reduced opacity
      container.appendChild(div);

      // Store particle and its properties for animation
      particles.push({
        element: div,
        size,
        left,
        top,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        variationX: Math.random() * 0.008,
        variationY: Math.random() * 0.008,
      });
    }

    // Animation function
    const animateParticles = () => {
      particles.forEach((p) => {
        p.speedX += p.variationX * (Math.random() - 0.5);
        p.speedY += p.variationY * (Math.random() - 0.5);

        p.left += p.speedX;
        p.top += p.speedY;

        // Boundary conditions to keep particles within the container
        if (p.left < 5 || p.left > 95) p.speedX *= -1;
        if (p.top < 5 || p.top > 95) p.speedY *= -1;

        p.element.style.left = `${p.left}%`;
        p.element.style.top = `${p.top}%`;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-white py-20 px-4 md:px-0">
      <div
        ref={shapesRef}
        className="absolute top-0 w-[80%] h-full opacity-10"
      ></div>
      <div className=" max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to RadTrack
        </h1>
        <p className="text-lg md:text-xl text-slate-400">
          a state-of-the-art platform designed to track radiation doses across
          facilities. Leveraging the power of modern technology, we provide
          seamless integration and real-time monitoring to ensure safety and
          compliance. Our mission is to revolutionize radiation tracking, making
          it more efficient, accurate, and user-friendly.
        </p>
      </div>
    </section>
  );
}

export default Hero;
