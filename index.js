function loadingPicture() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("images");
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  msg.innerHTML = ` <h3> It's ${hour}h : ${minutes}m : ${seconds}s <h3> `;

  if (hour >= 0 && hour < 12) {
    img.src = "manha.jpg";
    msg.innerHTML += `Good morning!`;
    document.body.style.background = `#FEE069`;
  } else if (hour >= 12 && hour < 18) {
    img.src = "tarde.jpg";
    msg.innerHTML += `Good afternoon!`;
    document.body.style.background = `#b9846f`;
  } else {
    img.src = "noite.jpg";
    msg.innerHTML += `Good evening`;
    document.body.style.background = `#13213B`;
  }
}
