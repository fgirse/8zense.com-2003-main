"use client"

import { motion,AnimatePresence  } from "framer-motion";
import React from "react";
import Image from "next/image";



export const ClientAnimationWrapper = ({ children }: { children: React.ReactNode }) => { 
     return (
        <>

        <AnimatePresence>
      <div>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1.66 }}
      transition={{
        duration: 2.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >

        { children}
        </motion.div>
      </div>
      </AnimatePresence>
     </>
    );
  }


