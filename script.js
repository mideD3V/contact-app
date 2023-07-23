const submitBtn = document.querySelector("#submit");
const container = document.querySelector(".cont-div");
const memberDiv = document.querySelector(".memdiv");
const deleteBtn = document.querySelector(".del-cont");


const addContact = (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const dob = document.querySelector("#dob");
  const fullname = firstName.value + " " + lastName.value;
  const error = document.querySelector(".error-message");

  const memDiv = document.createElement("div");
  memDiv.classList.add("memdiv");

  const memName = document.createElement("p");
  memName.textContent = fullname;

  const memEmail = document.createElement("p");
  memEmail.textContent = email.value;

  const memPhone = document.createElement("p");
  memPhone.textContent = phone.value;

  const memDob = document.createElement("p");
  memDob.textContent = dob.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.classList.add("del-cont");

  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    dob.value == ""
  ) {
    console.log("Empty fields");
    error.style.display = "block";
  } else {
    console.log("SUCCESS!");
    error.style.display = "none";
    memDiv.appendChild(memName);
    memDiv.appendChild(memEmail);
    memDiv.appendChild(memPhone);
    memDiv.appendChild(memDob);
    memDiv.appendChild(delBtn);
    container.append(memDiv);
 
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    dob.value = "";

    return container;
  }
};

const delContact = (e) => {
  //container.style.display = 'none'

  e.preventDefault();
  console.log("DELETED!");
};


submitBtn.addEventListener("click", addContact);
deleteBtn.addEventListener("click", delContact);
