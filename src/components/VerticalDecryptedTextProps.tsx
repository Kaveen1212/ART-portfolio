import { useState, useEffect } from "react";
import DecryptedText from "./DecryptedText";

interface VerticalDecryptedTextProps {
  lines: string[];
  // Pass any other DecryptedText props you want
  [key: string]: any;
}

export default function VerticalDecryptedText({ lines, ...props }: VerticalDecryptedTextProps) {
  const [revealed, setRevealed] = useState<number[]>([]);

  useEffect(() => {
    // Reveal lines from center outwards
    let i = 0;
    const center = Math.floor(lines.length / 2);
    const order: number[] = [center];
    for (let offset = 1; offset <= center; offset++) {
      if (center - offset >= 0) order.push(center - offset);
      if (center + offset < lines.length) order.push(center + offset);
    }
    let interval = setInterval(() => {
      setRevealed((prev) => [...prev, order[i]]);
      i++;
      if (i >= order.length) clearInterval(interval);
    }, 350); // adjust speed as needed
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="flex flex-col gap-2">
      {lines.map((line, idx) => (
        <DecryptedText
          key={idx}
          text={line}
          animateOn={revealed.includes(idx) ? "view" : undefined}
          revealDirection="center"
          {...props}
        />
      ))}
    </div>
  );
}