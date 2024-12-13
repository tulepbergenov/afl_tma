import "@/shared/styles/index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import tma from "@twa-dev/sdk";
import { Suspense, useLayoutEffect } from "react";
import { Router } from "./app/router";
import { ErudaDevTools } from "./components";
import { hapticFeedbackImpactOccurred } from "./shared/libs";

tma.headerColor = "#000000";

if (["ios", "android"].includes(tma.platform)) {
  tma.requestFullscreen();

  hapticFeedbackImpactOccurred();
}

export const App = () => {
  useLayoutEffect(() => {
    if (tma.isFullscreen) {
      document.body.style.paddingTop = "100px";
    }
  }, []);

  if (tma.platform === "unknown") {
    window.location.href = "https://t.me/afl_dev_bot";
  } else {
    return (
      <>
        <Router />
        {import.meta.env.MODE === "development" && (
          <Suspense fallback={null}>
            <ErudaDevTools />
          </Suspense>
        )}
      </>
    );
  }
};
