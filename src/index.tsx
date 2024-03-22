import { createRoot } from "react-dom/client";
import { App } from "./App";

const domNode = document.createElement("div");

const root = createRoot(domNode as HTMLElement);

root.render(<App />);

document.body.appendChild(domNode);
