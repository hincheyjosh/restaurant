export default function createContactContent() {
  // Clear out main section
  const content = document.querySelector(".content");
  content.innerHTML = "";

  // Create div for contact
  const contactContainer = document.createElement("div");
  contactContainer.classList = "mainContainer";

  // Create and add header to contact form
  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact Us";
  contactContainer.appendChild(contactHeader);

  // Create and add phone number and address
  const phone = document.createElement("h6");
  phone.classList = "phone";
  phone.textContent = "(555) 444-8888";
  contactContainer.appendChild(phone);

  const address = document.createElement("p");
  address.classList = "address";
  address.innerHTML = `<ul>
                            <li>22234 Curtis LeMay Way</li>
                            <li>Waco, TX 66666</li>
                        </ul>`;
  contactContainer.appendChild(address);

  const formDiv = document.createElement("div");
  formDiv.classList = "formContainer";

  // Create and add a short contact form
  const form = document.createElement("form");
  form.classList = "contactForm";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Tell us your name";

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Tell us whats on your mind";
  messageInput.rows = 10;

  const submitButton = document.createElement("input");
  submitButton.type = "submit";

  form.appendChild(nameInput);
  form.appendChild(messageInput);
  form.appendChild(submitButton);

  formDiv.appendChild(form);

  contactContainer.appendChild(formDiv);

  return contactContainer;
}
