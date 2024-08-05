document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
}
let contacts = [];
function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  if (name && phone) {
    contacts.push({ name, phone });
    updateContactList();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
  } else {
    alert("Please enter both name and phone number.");
  }
}
function updateContactList() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name}: ${contact.phone}`;
    contactList.appendChild(li);
  });
}
function saveContacts() {
  const blob = new Blob([JSON.stringify(contacts, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contacts.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
