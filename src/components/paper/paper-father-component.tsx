import React, { PropsWithChildren, useState } from "react";
import MotionBox from "../motion/MotionBox";

interface PaperFatherProps extends PropsWithChildren {}

function PaperFatherComponent({ children }: PaperFatherProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionBox
      sx={{
        width: "200px",
        height: "200px",
        bgcolor: "antiquewhite",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, { isHovered }); // Pasa el estado a cada hijo
      })}
    </MotionBox>
  );
}

export default PaperFatherComponent;
