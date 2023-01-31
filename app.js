const section = document.querySelector("#second-section");
const url = document.querySelector("#meme-link");
const textOnTop = document.querySelector("#top-input");
const textOnBottom = document.querySelector("#bottom-input");
const btn = document.querySelector("#submit-button");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const div = document.createElement("div");
  div.classList.add("text");
  const top = document.createElement("div");
  top.classList.add("text-top");
  const bottom = document.createElement("div");
  bottom.classList.add("text-bottom");
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = url.value;
  if (url.value === "") {
    alert("Please enter a valid URL");
    return;
  }
  top.textContent = textOnTop.value.toUpperCase();
  bottom.textContent = textOnBottom.value.toUpperCase();
  div.appendChild(img);
  div.appendChild(top);
  div.appendChild(bottom);
  section.prepend(div);
  div.addEventListener("click", function (event) {
    const removeBtn = event.target.parentNode;
    removeBtn.remove();
    console.log(removeBtn);
  });
  url.value = "";
  textOnTop.value = "";
  textOnBottom.value = "";
});
