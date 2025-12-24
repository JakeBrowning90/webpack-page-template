import './style.css';
import { printHelloWorld } from "./helloworld.js";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Here's a dynamic element";
  return element;
}

document.body.appendChild(component());
printHelloWorld();
