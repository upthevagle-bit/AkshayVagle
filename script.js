const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqkplaq";
const WHATSAPP_URL =
  "https://wa.me/9779768377067?text=Hi%20MAN-VIS,%20I%E2%80%99d%20like%20to%20enquire%20about%20booking%20you%20for%20an%20event.";

const loader = document.querySelector("[data-loader]");
const header = document.querySelector("[data-header]");
const form = document.querySelector("#bookingForm");
const statusBox = document.querySelector("#formStatus");
const dateField = form?.querySelector('input[name="eventDate"]');

document.body.classList.add("is-loading");

if (dateField) {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  dateField.min = today.toISOString().split("T")[0];
}

window.addEventListener("load", () => {
  document.body.classList.remove("is-loading");
  loader?.classList.add("is-hidden");
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const setStatus = (message, type) => {
  statusBox.textContent = message;
  statusBox.className = `form-status is-visible is-${type}`;
};

const clearStatus = () => {
  statusBox.textContent = "";
  statusBox.className = "form-status";
};

const validateField = (field) => {
  const wrapper = field.closest(".field");
  const valid = field.checkValidity();
  wrapper?.classList.toggle("is-invalid", !valid);
  return valid;
};

form?.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.closest(".field")?.classList.contains("is-invalid")) validateField(field);
  });
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearStatus();

  const fields = [...form.querySelectorAll("input, select, textarea")];
  const isValid = fields.map(validateField).every(Boolean);

  if (!isValid) {
    setStatus("Please complete the highlighted details before sending your MAN-VIS booking request.", "error");
    return;
  }

  const submitButton = form.querySelector(".submit-button");
  submitButton.classList.add("is-loading");
  submitButton.disabled = true;

  const formData = new FormData(form);
  formData.append("_subject", "New MAN-VIS premium booking enquiry");
  formData.append("whatsapp_booking_link", WHATSAPP_URL);
  formData.append("artist_instagram", "https://www.instagram.com/manvis_official");

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Formspree submission failed");

    setStatus("Booking request sent. MAN-VIS will respond by email or WhatsApp.", "success");
    form.reset();
  } catch (error) {
    setStatus("The form could not send right now. Please use WhatsApp for the fastest booking response.", "error");
  } finally {
    submitButton.classList.remove("is-loading");
    submitButton.disabled = false;
  }
});
