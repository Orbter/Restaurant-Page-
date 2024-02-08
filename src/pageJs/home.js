import pizzaGuy from "/src/assets/pizza-guy.svg"; // Assuming pizza-guy.svg is in the assets folder and processed by Webpack

function homePage() {
  const content = document.getElementById("content");
  const logo = document.createElement("img");
  const text = document.createElement("text");
  logo.src = pizzaGuy;
  logo.id = "logo";
  text.className = "text";
  text.textContent =
    "Discover PureSlice: Where gourmet meets wellness. Bite into our deliciously healthy pizzas, made with organic ingredients and a pinch of joy. Taste the difference health makes. PureSlice - Your slice of health!";
  content.appendChild(logo);
  content.appendChild(text);
}
export default homePage;
