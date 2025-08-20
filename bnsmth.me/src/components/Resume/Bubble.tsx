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
        width: "30px",
        height: "30px",
        zIndex: 2
      }}>
        {/* White bubble behind */}
        <div style={{
          position: "absolute",
          top: -6,
          left: -6,
          width: "140%",
          height: "140%",
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
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: color,
          zIndex: 2
        }} />
      </div>
    </div>
  );
};

export default Bubble;
