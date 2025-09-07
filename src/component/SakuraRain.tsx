import React from "react";
import "../styles/sakuraRain.css"; 

const SakuraRain: React.FC = () => {
  const generatePetals = (count: number) => {
    const petals = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 10;
      const swingDuration = Math.random() * 3 + 2;

      petals.push(
        <div
          key={i}
          className="absolute select-none"
          style={{
            top: 0,
            left: `${left}%`,
            animation: `fall ${duration}s linear ${delay}s infinite`,
            willChange: "transform",
          }}
        >
          <div
            style={{
              fontSize: `${size}px`,
              animation: `swing ${swingDuration}s ease-in-out infinite alternate`,
              willChange: "transform",
            }}
            className="text-pink-400"
          >
            🌸
          </div>
        </div>
      );
    }
    return petals;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden h-screen w-screen">
      {generatePetals(20)}
    </div>
  );
};

export default SakuraRain;
