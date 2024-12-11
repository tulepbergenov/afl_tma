import tma from "@twa-dev/sdk";
import { createRoot } from "react-dom/client";
import { App } from "./App";

tma.ready();

tma.expand();

createRoot(document.getElementById("afl-tma")!).render(<App />);
