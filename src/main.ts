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

// Step 5 & 6 - Variable
let growthRate = 0;

// Step 6 -  Set the default counter growth rate to zero
// Track purchases for each upgrade
let purchasedA = 0;
let purchasedB = 0;
let purchasedC = 0;

// Step 7 
const basePriceA = 10;
const basePriceB = 100;
const basePriceC = 1000;

let currentPriceA = basePriceA;
let currentPriceB = basePriceB;
let currentPriceC = basePriceC;

const rateDisplay = document.createElement("p");
rateDisplay.innerHTML = `Growth Rate: ${growthRate.toFixed(1)} units/sec`;
app.append(rateDisplay);

const upgradeDisplay = document.createElement("p");
upgradeDisplay.innerHTML = `A: ${purchasedA}, B: ${purchasedB}, C: ${purchasedC}`;
app.append(upgradeDisplay);

const updateDisplay = () => {
  counterDisplay.innerHTML = `Rocket Fuel: ${counter.toFixed(1)}`;
  rateDisplay.innerHTML = `Growth Rate: ${growthRate.toFixed(1)} units/sec`;
  upgradeDisplay.innerHTML = `A: ${purchasedA}, B: ${purchasedB}, C: ${purchasedC}`;
};

// Create the increment button - Step 2
const incrementButton = document.createElement("button");
incrementButton.innerHTML = "&#128640;";
incrementButton.addEventListener("click", () => {
  counter++;
  counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
});
app.append(incrementButton);

/*SetInterval - Step 3
const incrementCounter = () => {
  counter++;
  counterDisplay.innerHTML = `Rocket Fuel: ${counter}`;
};

setInterval(incrementCounter, 1);*/

//Continuous Growth - Step 4
let lastTimestamp = 0;

function incrementCounterWithAnimationFrame(timestamp: number) {
  if (lastTimestamp === 0) {
    lastTimestamp = timestamp;
  }

  const deltaTime = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  counter += (growthRate * deltaTime) / 1000;
  updateDisplay();

  requestAnimationFrame(incrementCounterWithAnimationFrame);
}

// Start the animation frame loop
requestAnimationFrame(incrementCounterWithAnimationFrame);

/*Upgrade Button - Step 5
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
*/

// Step 6 & 7
const upgradeAButton = document.createElement("button");
upgradeAButton.innerHTML = `Purchase A (+0.1 units/sec) - Cost: ${currentPriceA.toFixed(1)} units`;
upgradeAButton.disabled = true; // Initially disabled until counter reaches 10
upgradeAButton.addEventListener("click", () => {
  if (counter >= currentPriceA) {
    counter -= currentPriceA;
    growthRate += 0.1; 
    purchasedA++; 
    currentPriceA *= 1.15; // Increase price for next purchase - Step 7
    upgradeAButton.innerHTML = `Purchase A (+0.1 units/sec) - Cost: ${currentPriceA.toFixed(1)} units`; 
    updateDisplay();
  }
});
app.append(upgradeAButton);

const upgradeBButton = document.createElement("button");
upgradeBButton.innerHTML = `Purchase B (+2.0 units/sec) - Cost: ${currentPriceB.toFixed(1)} units`;
upgradeBButton.disabled = true; // Initially disabled until counter reaches 100
upgradeBButton.addEventListener("click", () => {
  if (counter >= currentPriceB) {
    counter -= currentPriceB; 
    growthRate += 2.0; 
    purchasedB++; 
    currentPriceB *= 1.15; // Increase price for next purchase - Step 7
    upgradeBButton.innerHTML = `Purchase B (+2.0 units/sec) - Cost: ${currentPriceB.toFixed(1)} units`;
    updateDisplay(); 
  }
});
app.append(upgradeBButton);

const upgradeCButton = document.createElement("button");
upgradeCButton.innerHTML = `Purchase C (+50 units/sec) - Cost: ${currentPriceC.toFixed(1)} units`;
upgradeCButton.disabled = true; // Initially disabled until counter reaches 1000
upgradeCButton.addEventListener("click", () => {
  if (counter >= currentPriceC) {
    counter -= currentPriceC; 
    growthRate += 50.0; 
    purchasedC++; 
    currentPriceC *= 1.15; // Increase price for next purchase - Step 7
    upgradeCButton.innerHTML = `Purchase C (+50 units/sec) - Cost: ${currentPriceC.toFixed(1)} units`; 
    updateDisplay(); 
  }
});
app.append(upgradeCButton);

setInterval(() => {
  upgradeAButton.disabled = counter < 10;
  upgradeBButton.disabled = counter < 100;
  upgradeCButton.disabled = counter < 1000;
}, 100);
