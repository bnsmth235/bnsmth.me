import React from "react";

interface BubbleProps {
  color?: string;
}

const Bubble: React.FC<BubbleProps> = ({ color = "#1e2938" }) => {
  return (
    <div>
      <div style={{
        position: "relative",
        display: "inline-block",
        width: "44px",
        height: "44px",
        zIndex: 2
      }}>
        {/* White bubble behind */}
        <div style={{
          position: "absolute",
          top: -8,
          left: -8,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#fff",
          border: "3px dashed #1e2938",
          zIndex: 0
        }} />
        {/* Main colored bubble */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: color,
          zIndex: 2
        }} />
      </div>
    </div>
  );
};

export default Bubble;
