// Menu Toggle
const menuButton = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;
// Directory Data (Sample)
const businesses = [
  {
    name: "Kampala Cafe",
    address: "Kampala Road",
    phone: "+256 700000001"
  },
  {
    name: "Tech Hub Uganda",
    address: "Ntinda",
    phone: "+256 700000002"
  },
  {
    name: "City Supermarket",
    address: "Kololo",
    phone: "+256 700000003"
  }
];

// Populate Directory
const directory = document.getElementById("directory");

if (directory) {
  businesses.forEach(biz => {
    const div = document.createElement("div");
    div.classList.add("business-card");

    div.innerHTML = `
      <h3>${biz.name}</h3>
      <p>${biz.address}</p>
      <p>${biz.phone}</p>
    `;

    directory.appendChild(div);
  });

  // Toggle View
  document.getElementById("gridBtn").addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
  });

  document.getElementById("listBtn").addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
  });
}

// Visit Message (Discover Page)
const visitMessage = document.getElementById("visit-message");

if (visitMessage) {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! This is your first visit.";
  } else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    visitMessage.textContent = `You last visited ${days} day(s) ago.`;
  }

  localStorage.setItem("lastVisit", now);
}