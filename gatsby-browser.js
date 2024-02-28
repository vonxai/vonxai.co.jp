import "./src/styles/global.css";
export { wrapPageElement } from "./src/app";

const ReactDOM = require("react-dom/client");
export function replaceHydrateFunction() {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
}
