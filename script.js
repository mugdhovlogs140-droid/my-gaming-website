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
