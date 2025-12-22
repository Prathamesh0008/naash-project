"use client";

import { useEffect, useState } from "react";

/**
 * PageShell
 * - Prevents navbar overlap
 * - Handles large navbar height
 * - Keeps consistent layout
 */
export default function PageShell({ children }) {
  const [offset, setOffset] = useState(220); // default full navbar height

  useEffect(() => {
    const updateOffset = () => {
      const navbar = document.querySelector("header");
      if (navbar) {
        setOffset(navbar.offsetHeight);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    window.addEventListener("scroll", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
      window.removeEventListener("scroll", updateOffset);
    };
  }, []);

  return (
    <main
      style={{ paddingTop: offset }}
      className="min-h-screen bg-black text-white"
    >
      {children}
    </main>
  );
}
