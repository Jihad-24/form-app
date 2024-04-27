import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import animationData from "/Animation.json?url";
const TimerLoader = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: animationData,
      renderer: "svg", // or 'canvas', 'html'
      loop: true, // Optional
      autoplay: true, // Optional
    });
  }, []);

  return <div ref={container} />;
};

export default TimerLoader;
