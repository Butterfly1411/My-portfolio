import React from "react";

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050519] via-[#0a0a23] to-[#000000]" />

      {/* Stars */}
      <div className="stars absolute inset-0" />

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="shooting-star absolute left-[-120px]"
          style={{
            top: `${20 + i * 10}%`,
            animationDelay: `${i}s`
          }}
        />
      ))}

      <style>{`
        .stars {
          width: 1px;
          height: 1px;
          background: white;
          box-shadow:
            2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,
            22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,
            38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,
            53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white;
          animation: twinkle 8s infinite linear;
        }

        .stars::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          box-shadow:
            8vw 12vh 2px white, 16vw 18vh 1px white,
            24vw 25vh 2px white, 33vw 15vh 1px white;
          animation: twinkle 6s infinite linear reverse;
        }

        .shooting-star {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          animation: shoot 3s infinite ease-in;
        }

        @keyframes twinkle {
          0%,100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) rotate(25deg);
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(50vh) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default StarsBackground;
