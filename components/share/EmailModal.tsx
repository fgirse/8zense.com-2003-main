"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import ContactUs from"@/components/share/contact-us";
import Image from "next/image";
import Logo from "@/public/assets/images/LogoEZ990.svg"

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-5 py-3
     mb-12 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="mb-12 text-4xl bg-gradient-to-b from-zenseSignal2 to-yellow-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 shadow-sm hovr:shadow-lg shadow-black transition-opacity"
      >
        sende e-mail Nachricht
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/30 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-slade-500 to-neutral-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
      {/*<FiAlertCircle className="text-white/ rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />*/}
            <div className="relative z-10">
              <div className="bg-white w-36 h-36 rounded-xl text-3xl text-indigo-600 grid place-items-center mx-auto">
                <Image src={Logo} sizes="100vw "alt="Logo"/>
              </div>
              <h3 className="py-3 text-3xl font-bold text-center mb-5">
                Send email to 8zense.com
              </h3>
              
              <ContactUs/>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-36 bg-zenseSignal2 hover:bg-white/10 transition-colors text-white font-semibold py-2 rounded"
                >
                  zurück
                </button>
                {/*<button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
      </button>*/}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;