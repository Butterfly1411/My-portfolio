import React from "react";

const StarsBackground = () => {
  if (window.innerWidth < 768) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050519] via-[#0a0a23] to-black" />
      <div className="stars absolute inset-0" />

      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="shooting-star absolute left-[-120px]"
          style={{ top: `${30 + i * 15}%`, animationDelay: `${i * 2}s` }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
