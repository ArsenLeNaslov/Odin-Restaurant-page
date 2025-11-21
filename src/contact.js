const contactBoxes = [];
class Contact {
  constructor(title, description, icon) {
    this.title = title;
    this.description = description;
    this.icon = icon;
  }
}
function addContact(title, description, icon) {
  let newContact = new Contact(title, description, icon);
  contactBoxes.push(newContact);
}
export default function loadContactPage(parentContainer) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");
  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  const text = document.createElement("p");
  text.innerHTML = `At Odin's Orbital Station Restaurant, staying connected across the vastity of the Galaxy is a core value of our hospitality. If you have questions, want to reserve a docking-level dining slot, or wish to share your time aboard with us, we are ready to listen. Guidance on life and service in microgravity follows principles documented by NASA for orbital operations. Reach us through station comms, encrypted uplink, or by visiting our reception module along the central ring.
<span class="highlight">We look forward to welcoming you to our table among the stars</span>`;
  const contactCards = document.createElement("div");
  contactCards.classList.add("contact-cards-div");
  contactContainer.appendChild(title);
  contactContainer.appendChild(text);
  contactContainer.appendChild(contactCards);
  contactBoxes.forEach((contact) => {
    const card = createContactCard(contact);
    contactCards.appendChild(card);
  });
  parentContainer.appendChild(contactContainer);
}
function createContactCard(contact) {
  const card = document.createElement("div");
  card.classList.add("contact-card");
  const logo = document.createElement("span");
  logo.classList.add("material-icons", "contact-icon");
  logo.textContent = contact.icon;
  const title = document.createElement("h3");
  title.textContent = contact.title;
  const description = document.createElement("p");
  description.textContent = contact.description;
  card.appendChild(logo);
  card.appendChild(title);
  card.appendChild(description);
  return card;
}
addContact("Phone", "Station Comms Channel 4 Delta (local intra-orbit line)", "phone");
addContact("E-mail", "guest_services@odin-orbital.gal", "email");
addContact(
  "Location",
  "Central Ring, Observation Deck Module 3, Orbital Station Upsilon \nLow Earth Orbit at approximately 420 km altitude, 51.6° inclination",
  "location_on"
);
addContact(
  "Schedule",
  "Open daily on station time 10:00 – 22:00 \nReservation windows adjust based on docking traffic and orbital maintenance cycles",
  "schedule"
);
