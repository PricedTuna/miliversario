import { PropsWithChildren } from "react";
import MotionBox from "../motion/MotionBox";

interface PaperParams extends PropsWithChildren {
  rotateY: number;
  isHovered?: boolean; // Prop para controlar el estado de hover
}

function PaperChild({ children, rotateY, isHovered }: PaperParams) {
  return (
    <MotionBox
      initial={{ rotateY: 0, translateZ: 0 }}
      animate={{ 
        rotate: isHovered ? rotateY : 0, // Aplica el efecto de hover si isHovered es true
      }}
      transition={{ duration: 0.5 }}
      sx={{
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        transition: "transform 0.5s ease",
        position: "absolute",
        color: "black",
      }}
    >
      {children}
    </MotionBox>
  );
}

export default PaperChild;
