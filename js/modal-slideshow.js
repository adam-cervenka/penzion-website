var slideIndex = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function openModal(n) {
  var cls = document.getElementById("slides").className.replace("close", "open");
  document.getElementById("slides").className = cls;
  document.getElementById("slides").style.display = "block";
  showSlides(n);
}

function closeModal() {
  var cls = document.getElementById("slides").className.replace("open", "close");
  document.getElementById("slides").className = cls;
  sleep(500).then(() => {
    document.getElementById("slides").style.display = "none";
  });
}

function move(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  slideIndex = n;
  if (slideIndex < 0) slideIndex += slides.length;
  else if (slideIndex >= slides.length) slideIndex -= slides.length;
  var indicator = [slideIndex + 1, "/", slides.length].join("");
  document.getElementById("indicator").innerHTML = indicator;
  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slides[slideIndex].style.display = "block";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeModal();
  else if (event.key === "ArrowLeft") move(-1);
  else if (event.key === "ArrowRight") move(1);
});
