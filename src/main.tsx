import tma from "@twa-dev/sdk";
import { createRoot } from "react-dom/client";
import { App } from "./App";

tma.ready();

createRoot(document.getElementById("afl-tma")!).render(<App />);
