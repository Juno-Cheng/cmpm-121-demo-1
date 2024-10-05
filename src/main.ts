import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Create a counter display - Step 1
let counter = 0;
const counterDisplay = document.createElement("p");
counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
app.append(counterDisplay);

//Step 5 - Variable
let growthRate = 0;


// Create the increment button - Step 2
const incrementButton = document.createElement("button");
incrementButton.innerHTML = "&#128640;";
incrementButton.addEventListener("click", () => {
  counter++;
  counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
});
app.append(incrementButton);

//SetInterval - Step 3
const incrementCounter = () => {
  counter++;
  counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
};

setInterval(incrementCounter, 1);

//Continuous Growth - Step 4
let lastTimestamp = 0;

function incrementCounterWithAnimationFrame(timestamp: number) {
  if (lastTimestamp === 0) {
    lastTimestamp = timestamp;
  }

  const deltaTime = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  counter += (growthRate * deltaTime) / 1000;
  counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;

  requestAnimationFrame(incrementCounterWithAnimationFrame);
}

// Start the animation frame loop
requestAnimationFrame(incrementCounterWithAnimationFrame);

//Upgrade Button - Step 5
const upgradeButton = document.createElement("button");
upgradeButton.innerHTML = "Purchase Upgrade (+1 Growth Rate)";
upgradeButton.disabled = true; // Initially disabled until counter reaches 10
upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10; 
    growthRate++; 
    counterDisplay.innerHTML = `Rocket Fuel: ${counter}`; // Update counter display after purchase
  }
});
app.append(upgradeButton);

// Enable the upgrade button when the player has at least 10 units
setInterval(() => {
  upgradeButton.disabled = counter < 10;
}, 100);