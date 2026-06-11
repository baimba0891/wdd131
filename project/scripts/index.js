
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.createElement("p");
  counter.textContent = `You have visited this site ${visits} times.`;
  document.body.appendChild(counter);
});

const galleryImages = [
  { src: "images/bunce2_island.webp", alt: "Bunce Island", caption: "Historic Bunce Island" },
  { src: "images/tacugama.webp", alt: "Tacugama Sanctuary", caption: "Tacugama Chimpanzee Sanctuary" },
  { src: "images/No2_river.webp", alt: "River No. 2 Beach", caption: "Beautiful Sierra Leone Beach" }
];

function renderGallery() {
  const gallery = document.querySelector("#gallery");
  gallery.innerHTML = galleryImages.map(img =>
    `<figure>
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <figcaption>${img.caption}</figcaption>
    </figure>`
  ).join("");
}
document.addEventListener("DOMContentLoaded", renderGallery);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    if (!name || !email.includes("@")) {
      alert("Please enter a valid name and email.");
    } else {
      localStorage.setItem("contactName", name);
      alert(`Thank you, ${name}! We’ll be in touch soon.`);
      form.reset();
    }
  });
});




