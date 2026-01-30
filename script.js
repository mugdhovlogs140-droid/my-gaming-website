function copyIP() {
  navigator.clipboard.writeText("play.mygamingzone.net");
  const msg = document.getElementById("copied");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 2000);
}

// 1️⃣ Particles.js Config
particlesJS('particles-js', {
  "particles": {
    "number": {"value": 80},
    "size": {"value": 3},
    "move": {"speed": 2}
  },
  "interactivity": {
    "events": {"onhover": {"enable": true, "mode": "repulse"}}
  }
});

// 2️⃣ Hover Sound
const hoverBtn = document.getElementById('hoverBtn');
const hoverSound = document.getElementById('hoverSound');
hoverBtn.addEventListener('mouseenter', () => hoverSound.play());

// 3️⃣ Copy IP
document.getElementById('copyBtn').addEventListener('click', () => {
  const ipBox = document.getElementById('ipBox');
  ipBox.select();
  ipBox.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(ipBox.value)
    .then(() => alert("IP Copied!"))
    .catch(() => alert("Failed to copy!"));
});

// 4️⃣ Login Button Click
document.getElementById('loginBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert("Login UI only, backend not connected.");
});
