// input member details
// Click a button to add the member to the existing list
// Have a delete button that remove member details from the list
//

const { Form } = require("react-bootstrap");

document.body.style.backgroundColor = "#000535";

//INPUT
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let submit = document.querySelector("#submit");

//OUTPUT
let isValid = true;
let contDiv = document.querySelector(".cont-div");
let delCont = document.querySelector("#del-cont");

let memName = document.querySelector("#member-name");
let memEmail = document.querySelector("#member-email");
let memPhone = document.querySelector("#member-phone");

// function addContact() {
//   const contactDiv = document.createElement('div')
//   contactDiv.className('contact-list')
// }

//ADD CONTACT FUNCTION
const addContact = (e) => {
  e.preventDefault();

  //GET FULL NAME
  // let fullname = firstname.value + " " + lastname.value;

  //ADD STYLE
  contDiv.style.display = "block";
  delCont.style.display = "block";

  const contDiv = document.createElement("div");
  contDiv.classList("cont-div");

  console.log('SUCCESS')
  return contDiv;
};

//EVENT LISTENERS
submit.addEventListener("click", addContact);

delCont.addEventListener("click", () => {
  contDiv.style.display = "none";
});
