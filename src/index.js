import leaf from "./assets/leaf.svg";
import pizza from "/src/assets/pizza-guy.svg"; // Assuming pizza-guy.svg is in the assets folder and processed by Webpack
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
const pizzaImg = document.getElementById("logo");
pizzaImg.src = pizza; // Corrected from pizzaImg to pizza
leafImg1.src = leaf;
leafImg2.src = leaf;
leafImg3.src = leaf;
leafImg4.src = leaf;

console.log("Pizza image path:", pizza); // Debugging line

console.log("Loading...");
aboutPage();
menuPage();
homePage();
