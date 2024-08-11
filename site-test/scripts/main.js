let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/capture 2.png") {
    myImage.setAttribute("src", "images/Capture 4.jpg");
  } else {
    myImage.setAttribute("src", "images/capture 2.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "La capute d'écran de " + myName;
  }

  function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "La capute d'écran de " + myName;
  }

  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "La capute d'écran de " + storedName;
  }

  myButton.addEventListener("click", function () {
    setUserName();
  });
  