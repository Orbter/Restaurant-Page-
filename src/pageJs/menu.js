import pizza1 from "/src/assets/regular-pizza.svg";
import pizza2 from "/src/assets/red-sauce.svg";
import pizza3 from "/src/assets/spicy-pizza.svg";
import pizza4 from "/src/assets/our-flagship-pizza.svg";
import pizza5 from "/src/assets/olives-tomato-onion.svg";
import pizza6 from "/src/assets/mushrooms-and-tomatoes.svg";
import pizza7 from "/src/assets/meat-and-cheese.svg";

function createMenu(name, img, ingredients) {
  const content = document.getElementById("content");
  const menu = document.createElement("div");
  const imgPizza = document.createElement("img");
  const headline = document.createElement("h2");
  const text = document.createElement("text");

  //content
  imgPizza.src = img;
  headline.textContent = name;
  text.textContent = ingredients;

  //class
  menu.classList.add("inner-fade-in", "menu-container");
  imgPizza.className = "pizza";
  text.className = "menu-text";
  headline.className = "menu-name ";

  //appending
  menu.appendChild(imgPizza);
  menu.appendChild(headline);
  menu.appendChild(text);
  content.appendChild(menu);
}
function menuPage() {
  createMenu(
    "Peppy",
    pizza1,
    "pepperoni, garnish of basil leaves, with a tomato sauce cheese base."
  );
  createMenu(
    "Margher",
    pizza2,
    "fresh tomato slices, chunks of mozzarella cheese, and is garnished with fresh basil."
  );
  createMenu(
    "Spicy",
    pizza3,
    "pepperoni, red chili peppers and garlic cloves  along with a classic cheese and tomato sauce base."
  );
  createMenu(
    "Supreme",
    pizza4,
    "black olives, red onions, slices of garlic cloves, chunks of sausage, fresh basil leaves, and a scattering of tomato slices, all on a cheese and tomato sauce base."
  );
  createMenu(
    "Delite",
    pizza5,
    "black olives, sliced tomatoes, red onion rings with cheese base with tomato sauce"
  );
  createMenu(
    "Veggie",
    pizza6,
    "sliced mushrooms, black olives, tomato slices mozzarella with cheese on a tomato sauce base."
  );
  createMenu(
    "Hawaiin",
    pizza7,
    " ham and pineapple with cheese and a tomato sauce base"
  );
}
export default menuPage;
