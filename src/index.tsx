import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./custom.d.ts";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
