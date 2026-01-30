// 1️⃣ Particles
particlesJS('particles-js', {
  "particles": {
    "number": {"value":80},
    "size":{"value":3},
    "move":{"speed":2}
  },
  "interactivity": {
    "events":{"onhover":{"enable":true,"mode":"repulse"}}
  }
});

// 2️⃣ Hover Sound
const hoverBtn = document.getElementById('hoverBtn');
const hoverSound = document.getElementById('hoverSound');
hoverBtn.addEventListener('mouseenter',()=>hoverSound.play());

// 3️⃣ Copy Minecraft IP
document.getElementById('copyBtn').addEventListener('click',()=>{
  const ipBox = document.getElementById('ipBox');
  ipBox.select();
  ipBox.setSelectionRange(0,99999);
  navigator.clipboard.writeText(ipBox.value)
    .then(()=>alert("IP Copied!"))
    .catch(()=>alert("Failed to copy!"));
});
// Music Toggle
const heroMusic = document.getElementById('heroMusic');
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', ()=>{
  if(heroMusic.paused){ heroMusic.play(); musicToggle.textContent="Pause Music"; }
  else{ heroMusic.pause(); musicToggle.textContent="Play Music"; }
});

// Discord Button
document.getElementById('discordBtn').addEventListener('click', ()=> {
  window.open("https://discord.gg/YOUR_LINK","_blank");
});

// Copy Minecraft IP
document.getElementById('copyIPBtn').addEventListener('click', ()=>{
  const tempIP = "123.45.67.89";
  navigator.clipboard.writeText(tempIP)
    .then(()=>alert("IP Copied!"))
    .catch(()=>alert("Failed!"));
});

// Watch Videos
document.getElementById('watchVideosBtn').addEventListener('click', ()=>{
  document.getElementById('videos').scrollIntoView({behavior:'smooth'});
});

// Latest Updates
document.getElementById('latestUpdatesBtn').addEventListener('click', ()=>{
  document.getElementById('updates').scrollIntoView({behavior:'smooth'});
});

// Hover Sound on Buttons
const hoverSound = new Audio('hover-sound.mp3');
document.querySelectorAll('.hero-btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>hoverSound.play());
});
