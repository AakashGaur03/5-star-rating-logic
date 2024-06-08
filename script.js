let hoverStar = document.getElementById("hoverStar");
let clickedStar = document.getElementById("clickStar");

for (let i = 0; i < 5; i++) {
  const div = document.createElement("i");
  div.setAttribute("class", "fa-solid fa-star star");

  document.getElementById("parentId").appendChild(div);
}

stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => mouseOverStar(index));
  star.addEventListener("mouseout", () => mouseOutStar(index));
  star.addEventListener("click", () => onclickStar(index));
});

function mouseOverStar(index) {
  for (let i = 0; i < index + 1; i++) {
    stars[i].classList.add("yellow");
    hoverStar.innerText = `Give ${index + 1} star`;
  }
}
function mouseOutStar(index) {
  for (let i = 0; i < index + 1; i++) {
    stars[i].classList.remove("yellow");
    hoverStar.innerText = ``;
  }
}
function onclickStar(index) {
  stars.forEach((item) => item.classList.remove("yellow2"));

  for (let i = 0; i < index + 1; i++) {
    stars[i].classList.add("yellow2");
  }
  clickedStar.innerText = `You Gave ${index + 1} star`;
}
