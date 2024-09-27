import React from "react";
import { motion } from "framer-motion";

import MuiBox, { BoxProps } from "@mui/material/Box";

const BoxComponent = React.forwardRef((props: BoxProps, ref) => (
  <MuiBox {...props} ref={ref} />
));

const MotionBox = motion.create(BoxComponent);

export default MotionBox;