import map from "/src/assets/google-photo.png";
import house from "/src/assets/pizza-shop.svg";
import number from "/src/assets/call.svg";
function aboutPage() {
  const content = document.getElementById("content");
  const imgMap = document.createElement("img");
  const imgHouse = document.createElement("img");
  const imgNumber = document.createElement("img");
  const Phone = document.createElement("h3");
  const pizzaHouse = document.createElement("h3");
  const addressContainer = document.createElement("div");
  const numberContainer = document.createElement("div");
  const container = document.createElement("div");
  const info = document.createElement("div");

  //classes
  imgMap.className = "map";
  imgHouse.classList.add("about-photo", "home");
  imgNumber.classList.add("about-photo", "phone");
  Phone.className = "about-headline";
  pizzaHouse.className = "about-headline";
  addressContainer.className = "address";
  numberContainer.className = "number";
  container.className = "about-container";
  info.className = "info";

  //inner text
  pizzaHouse.textContent = "address: 1435 Broadway, New York, NY 10018, Usa";
  Phone.textContent = "phone-number: 123-456-789";

  //src
  imgMap.src = map;
  imgHouse.src = house;
  imgNumber.src = number;
  //appending

  numberContainer.appendChild(imgNumber);
  numberContainer.appendChild(Phone);

  addressContainer.appendChild(imgHouse);
  addressContainer.appendChild(pizzaHouse);

  info.appendChild(numberContainer);
  info.appendChild(addressContainer);
  container.appendChild(info);
  container.appendChild(imgMap);
  content.appendChild(container);
}
export default aboutPage;
