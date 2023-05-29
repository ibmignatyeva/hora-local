function loadingPicture() {

  var msg = document.getElementById("msg");
  var img = document.getElementById("image");
  var date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  msg.innerHTML = ` <h2> It's ${hour}h : ${minutes}m : ${seconds}s <h2> <br> `;

  if (hour >= 0 && hour < 12) {
    msg.innerHTML += `<h3>Good morning!<h3> `;
    img.src = 'morning.jpg'
    document.body.style.background = `#FEE069`;

  } else if (hour >= 12 && hour < 18) {
    msg.innerHTML += `<h3>Good afternoon!<h3>`;
      img.src = 'afternoon.jpg';
    document.body.style.background = `#b9846f`;

  } else {
    msg.innerHTML += `<h3>Good evening!<h3> `;
      img.src = 'evening.jpg';
   document.body.style.background = `#07284b`;
  }
}
