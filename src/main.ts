import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);


// Create the increment button
const incrementButton = document.createElement("button");
incrementButton.innerHTML = "&#128640;";
app.append(incrementButton);

