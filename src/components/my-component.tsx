import * as motion from "framer-motion/client"

export const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1>HOLAAAAAAAAA!!!!!!!!!</h1>
  </motion.div>
)