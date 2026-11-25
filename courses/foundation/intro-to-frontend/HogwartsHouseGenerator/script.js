const tagline = document.createElement("h1");
tagline.textContent = "Discover your Hogwarts house!";
document.body.appendChild(tagline);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";
document.body.appendChild(input);

const button = document.createElement("button");
button.textContent = "Get your House!";
document.body.appendChild(button);

const nameDisplay = document.createElement("p");
nameDisplay.textContent = "Your name will appear here!";
document.body.appendChild(nameDisplay);

const houseDisplay = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

button.addEventListener("click", () => {
  console.log(`Name entered: ${input.value}`);
  const randomHouse =
    houseDisplay[Math.floor(Math.random() * houseDisplay.length)];
  nameDisplay.textContent = `${input.value} belongs in ${randomHouse}!`;
  input.value = `${input.value}`;
  if (input.value.trim() === "") {
    nameDisplay.textContent = "Please enter a valid name.";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});

const font = document.createElement("link");
font.rel = "stylesheet";
font.href =
  "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap";
document.head.appendChild(font);

document.body.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "'Cinzel Decorative', Georgia, serif";
  background-color: #bc6d6d; 
  font-size: 18px;
  color: #111010;
  padding: 12px 20px;
  margin: 10px 0;
`;

const taglineStyles = [tagline];
taglineStyles.forEach((element) => {
  element.style.cssText = ` 
font-family: "'Cinzel Decorative', Georgia, serif";
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
`;
});

const elements = [input, button];
elements.forEach((element) => {
  element.style.cssText = `
  font-family: "'Cinzel Decorative', Georgia, serif";
    display: block;
    margin: 10px 0;
    font-size: 20px;
  `;
});

const nameDisplayStyles = [nameDisplay];
nameDisplayStyles.forEach((element) => {
  element.style.cssText = `
  font-family: "'Cinzel Decorative', Georgia, serif";
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;
});

Object.assign(document.body.style, {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.36)), url("https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  margin: "0",
});
