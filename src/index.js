const circles = document.querySelectorAll(".circle");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const progress = document.querySelector("#progress");

let currentIndex = 1;
console.log(currentIndex);

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > circles.length) {
    currentIndex = 4;
  }

  if (currentIndex < 1) {
    currentIndex = 1;
  }
  updateUi();
});

prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 1) {
    currentIndex = 1;
  }
  updateUi();
});

function updateUi() {
  //circles
  circles.forEach((circle, idx) => {
    if (idx < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // buttons
  if (currentIndex < circles.length) {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
  if (currentIndex === 1) {
    prevButton.disabled = true;
  }
  if (currentIndex === circles.length) {
    nextButton.disabled = true;
  }

  //progress
  const activesCircles = document.querySelectorAll(".active");

  progress.style.width =
    ((activesCircles.length - 1) / (circles.length - 1)) * 100 + "%";
}
