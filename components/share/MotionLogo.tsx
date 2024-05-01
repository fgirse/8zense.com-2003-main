import "./styles.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function motionLogo() {
  return (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
<Image className="LogoEZ -mt-20 rounded-xl" src="/assets/images/LogoEZ.png" width="233" height="233" alt="Logo: 8zense.com"/>

</motion.div>
  );
}