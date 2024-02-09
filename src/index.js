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

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");
homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);

function loadHome() {
  const content = document.getElementById("content");
  if (homeButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(homeButton);
    homePage();
  }
}
function loadMenu() {
  const content = document.getElementById("content");
  if (menuButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(menuButton);
    menuPage();
  }
}
function loadAbout() {
  const content = document.getElementById("content");
  if (aboutButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(aboutButton);
    aboutPage();
  }
}
function Remove(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function toggelButtons(button) {
  menuButton.classList.remove("active");
  homeButton.classList.remove("active");
  aboutButton.classList.remove("active");
  button.classList.add("active");
}
