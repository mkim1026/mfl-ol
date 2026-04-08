const fieldIds = [
  "recipient",
  "docDate",
  "via",
  "subject",
  "intro",
  "body2",
  "body3",
  "oldOrg",
  "newOrg",
  "reason",
  "orgName",
  "ceo",
  "docNo",
  "manager",
  "email",
  "phone",
  "address",
];

const read = (id) => document.getElementById(id)?.value?.trim() ?? "";

function formatDate(value) {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  return `${y}.${m}.${d}`;
}

function render() {
  for (const id of fieldIds) {
    const value = id === "docDate" ? formatDate(read(id)) : read(id);
    document.querySelectorAll(`[data-bind="${id}"]`).forEach((el) => {
      el.textContent = value;
    });
  }

  const email = read("email");
  const mailLink = document.getElementById("mailLink");
  mailLink.textContent = email;
  mailLink.href = email ? `mailto:${email}` : "#";
}

fieldIds.forEach((id) => {
  const el = document.getElementById(id);
  el?.addEventListener("input", render);
});

document.getElementById("printBtn")?.addEventListener("click", () => {
  window.print();
});

render();
