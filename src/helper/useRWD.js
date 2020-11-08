import { useState, useEffect } from "react";
const useRWD = () => {
  const [device, setDevice] = useState(null);

  const handleRWD = () => {
    if (window.innerWidth >= 576) setDevice("PC");
    else setDevice("mobile");
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    handleRWD();

    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return device;
};

export default useRWD;
