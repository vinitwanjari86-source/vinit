

    // Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "🌷";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 500);

function sendAnswer(answer) {
    // show popup text
    document.getElementById("popupText").innerText =
      "Your answer '" + answer + "' Your note is now safe with me… forever. ❤️";
    document.getElementById("popup").style.display = "block";

    // send to PHP backend
    fetch("save.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "answer=" + encodeURIComponent(answer)
    })
    .then(res => res.text())
    .then(data => console.log(data));
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

