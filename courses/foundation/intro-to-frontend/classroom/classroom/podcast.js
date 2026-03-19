// Podcast data
const podcasts = [
  {
    name: "The mystery of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

// 1. Select the ul
const ul = document.getElementById("podcastList");

// 2. Loop through the podcasts
for (let i = 0; i < podcasts.length; i++) {
  const podcast = podcasts[i];

  // 3. Create li
  const li = document.createElement("li");

  // 4. Create h1
  const h1 = document.createElement("h1");
  h1.innerHTML = podcast.name;

  // 5. Append h1 to li
  li.appendChild(h1);

  // 6. Add image ONLY if imageUrl exists
  if (podcast.imageUrl) {
    const img = document.createElement("img");
    img.src = podcast.imageUrl;
    img.style.width = "200px"; // just for nicer display
    li.appendChild(img);
  }

  // 7. Append li to ul
  ul.appendChild(li);
}
