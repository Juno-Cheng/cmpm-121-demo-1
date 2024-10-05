import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Create a counter display
let counter = 0;
const counterDisplay = document.createElement("p");
counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
app.append(counterDisplay);

// Create the increment button
const incrementButton = document.createElement("button");
incrementButton.innerHTML = "&#128640;";
incrementButton.addEventListener("click", () => {
    counter++;
    counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
  });
app.append(incrementButton);
