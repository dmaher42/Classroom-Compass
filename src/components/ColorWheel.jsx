import React, { useEffect, useState } from "react";

export default function ColorWheel(){
  // Read current hue from CSS, default 210
  const getHue = () => {
    const h = getComputedStyle(document.documentElement).getPropertyValue("--h").trim();
    return Number(h || 210);
  };
  const [hue, setHue] = useState(getHue());

  useEffect(() => {
    document.documentElement.style.setProperty("--h", String(hue));
  }, [hue]);

  return (
    <div className="colorwheel" aria-label="Accent colour">
      <div className="kicker">Accent</div>
      <input
        type="range" min="0" max="360" step="1"
        value={hue}
        onChange={e => setHue(Number(e.target.value))}
        aria-label="Choose accent hue"
      />
      <div className="swatches">
        <span className="swatch" style={{ background: `hsl(${hue}, 90%, 55%)` }} />
        <span className="swatch" style={{ background: `hsl(${hue}, 80%, 50%)` }} />
        <span className="swatch" style={{ background: `hsl(${hue}, 70%, 40%)` }} />
      </div>
    </div>
  );
}
