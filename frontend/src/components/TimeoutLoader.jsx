import React, { useEffect, useState } from "react";
import { BlinkBlur } from "react-loading-indicators";

const TimeoutLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
    const handleLoaded = () => {
        setFade(true);
        setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === "complete") {
        handleLoaded();
    } else {
        window.addEventListener("load", handleLoaded);
    }

    return () => window.removeEventListener("load", handleLoaded);
    }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-neutral-900 text-white text-3xl">
        <BlinkBlur color="#5E2AFF" size="small" text="" textColor="" />
      </div>
    );
  }

  return (
    <>
        {children}
    </>
  );
};

export default TimeoutLoader;
