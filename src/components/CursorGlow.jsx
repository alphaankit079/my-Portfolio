import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-25 bg-primary/40 transition-all duration-150"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
      }}
    />
  );
};