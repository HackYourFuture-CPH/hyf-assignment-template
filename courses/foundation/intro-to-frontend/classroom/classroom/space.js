// Select the paragraph where we will show the astronauts
const p = document.getElementById("astronauts");

// Fetch data from the API
fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => {
    // Number of astronauts
    const number = data.number;

    // Names of astronauts
    const names = data.people.map((person) => person.name);

    // Build the text
    let text = `There are ${number} astronauts in space, they are:\n`;

    names.forEach((name) => {
      text += name + "\n";
    });

    // Add the text to the paragraph
    p.textContent = text;
  })
  .catch((error) => {
    p.textContent = "Failed to fetch astronaut data.";
    console.error(error);
  });
