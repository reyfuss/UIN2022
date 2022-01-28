// Oppgave 1

const button = document.getElementById("remove-btn");
const text = document.getElementById("remove");

const removeText = () => (text.innerHTML = null);

button.addEventListener("click", removeText);

// Oppgave 2

const changeText = document.getElementById("change");
const changeButton = document.getElementById("change-btn");

const Change = () => (changeText.innerHTML = "Nå er teksten endret");

changeButton.addEventListener("click", Change);

// Oppgave 3

const inputText = document.getElementById("input-text");
const input = document.getElementById("input");

const deleteInputText = () => (inputText.innerHTML = null);

deleteInputText();

const toHtml = (modifier) => {
  let type = modifier.key;
  inputText.innerHTML += type;
};

input.addEventListener("keyup", toHtml);

// Oppgave 4

const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const listButton = document.getElementById("write-list");
const li = myList.map((li) => `<li>${li}</li>`);

const showList = () => {
  ul.innerHTML = li.join("");
};

listButton.addEventListener("click", showList);

// Oppgave 5

const select = document.getElementById("select");
const text5 = document.getElementById("text");
const placeholder = document.getElementById("placeholder");
const createButton = document.getElementById("create");

const makeHTML = () => {
  const htmlType = select.value;
  const htmlText = text5.value;
  placeholder.innerHTML += `<${htmlType}>${htmlText}</${htmlType}>`;
};

createButton.addEventListener("click", makeHTML);

// Oppgave 6

const removeButton = document.getElementById("remove-li");
const ulList = document.getElementById("list");

const removeLiElement = () => {
  const lastChild = ulList.lastElementChild;
  ulList.removeChild(lastChild);
};

removeButton.addEventListener("click", removeLiElement);

// Oppgave 7

const name = document.getElementById("name");
const orderButton = document.getElementById("order");

const checker = () => {
  const nameCheck = name.value;
  if (nameCheck.length >= 5) {
    orderButton.disabled = true;
    orderButton.style = "border: 2px solid red";
  } else {
    orderButton.disabled = false;
    orderButton.style = "border: 1px solid black";
  }
};

name.addEventListener("keyup", checker);

// Oppgave 8

const childrenButton = document.getElementById("color");
const Parent = document.querySelector(".children");
const children = Parent.querySelectorAll("li");

console.log(children);

const changeColor = () => {
  Array.from(children).forEach((li, index) => {
    if (index % 2 === 0) {
      li.style = "border: 2px solid green";
    } else {
      li.style = "border: 2px solid pink";
    }
  });
};

childrenButton.addEventListener("click", changeColor);
