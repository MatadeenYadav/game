const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  response.classList.remove("hidden");
  document.querySelector(".buttons").style.display = "none";
});
