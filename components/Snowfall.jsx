"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function SnowfallEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <Snowfall
        color="#ffffff"
        snowflakeCount={150}
        speed={[0.5, 3]}
        wind={[-0.5, 2]}
        radius={[0.5, 3]}
      />
    </div>
  );
}

