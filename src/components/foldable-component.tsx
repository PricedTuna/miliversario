import { useState } from "react";
import MotionBox from "./motion/MotionBox";

const FoldableComponent = () => {
  const [isFolded, setIsFolded] = useState(false);

  return (
      <MotionBox className="half-container" >
        <div className="half-container">
          <h1>Hola! soy un texto bonito</h1>
        </div>
      </MotionBox>
  );
};

export default FoldableComponent;
