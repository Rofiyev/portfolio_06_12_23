"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  alt,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants: {
    hidden: { opacity: number };
    visible: { opacity: number };
  } = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay: number = 0.3;

  return (
    <motion.div
      ref={ref}
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </motion.div>
  );
};

export default SkillDataProvider;

interface SkillDataProviderProps {
  src: string;
  width: number;
  height: number;
  index: number;
  alt: string;
}
