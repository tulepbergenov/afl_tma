import eruda from "eruda";
import { useEffect } from "react";

const ErudaDevTools = () => {
  useEffect(() => {
    eruda.init();

    return () => {
      eruda.destroy();
    };
  }, []);

  return null;
};

export default ErudaDevTools;
