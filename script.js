function copyIP() {
  navigator.clipboard.writeText("play.mygamingzone.net");
  const msg = document.getElementById("copied");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 2000);
}
