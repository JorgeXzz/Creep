const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('backgroundMusic');

openBtn.addEventListener('click', () => {
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
    spawnHearts(5);
    fadeInMusic();
  } else {
    music.pause();
    music.currentTime = 0;
  }
});

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    fadeInMusic();
  } else {
    music.pause();
  }
});

function spawnHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * envelope.offsetWidth}px`;
    heart.style.top = `${envelope.offsetHeight}px`;
    envelope.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
}

function fadeInMusic() {
  music.volume = 0;
  music.play();
  let vol = 0;
  const fadeInterval = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(fadeInterval);
    }
  }, 200);
}
