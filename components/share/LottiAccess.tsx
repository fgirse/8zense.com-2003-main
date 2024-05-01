"use client"

import React from "react";
import { useLottie } from "lottie-react";
import targetAcesss from "../../public/assets/images/Animation - 1713216886564.json"
import Lottie from "lottie-react";

const App = () => <Lottie className="bg-neutral-700" animationData={targetAcesss} loop={true} />;

export default App;