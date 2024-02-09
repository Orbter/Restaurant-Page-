import leaf from "./assets/leaf.svg";
import "./styles/main.scss";

// Importing page JS
import aboutPage from "./pageJs/about";
import menuPage from "./pageJs/menu.js";
import homePage from "./pageJs/home.js";

// Correctly set the source for leaf-1 and logo images
const leafImg1 = document.getElementById("leaf-1");
const leafImg2 = document.getElementById("leaf-2");
const leafImg3 = document.getElementById("leaf-3");
const leafImg4 = document.getElementById("leaf-4");
leafImg1.src = leaf;
leafImg2.src = leaf;
leafImg3.src = leaf;
leafImg4.src = leaf;

function Remove(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

console.log("Loading...");
