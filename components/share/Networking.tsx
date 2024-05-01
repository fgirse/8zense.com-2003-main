"use client"

import React, { useRef } from "react";

import "@lottiefiles/lottie-player";

const styles = {
  container: "container",
  main: "main",
};

export default function Home() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/react-lottie-player");
  });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          
          loop
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/lf20_gb5bmwlm.json"
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </main>
    </div>
  );
}