
const btn = document.getElementById("btn");
const body = document.querySelector("body");
const card = document.getElementById("card");

let toggle = true;

const toggleDarkMode = () => {
  toggle = !toggle;
  if (toggle) {
    body.style.backgroundColor = "black";
    card.style.boxShadow = "10px 20px 40px rgb(1, 154, 154)";
    text.style.color = "#fff";
    card.style.backgroundColor = "#222";
  } else {
    body.style.backgroundColor = "rgb(1, 154, 154)";
    card.style.boxShadow = "10px 20px 40px rgb(1, 154, 154)";
    text.style.color = "#222";
    card.style.backgroundColor = "#fff";
  }
}

btn.addEventListener("click", toggleDarkMode);