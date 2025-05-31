const updateCountdown = () => {
  const now = new Date();
  const start = new Date("2025-12-16T20:30:00");
  let distance = now - start;

  if (distance < 0) distance = 0;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = distance % 1000;

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  document.getElementById("milliseconds").textContent = String(milliseconds).padStart(3, '0');

  const currentOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  const startOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  document.getElementById("currentDateTime").textContent =
    `Now: ${now.toLocaleString(undefined, currentOptions)}`;

  document.getElementById("startDateTime").textContent =
    `Started: ${start.toLocaleDateString(undefined, startOptions)} at 8:30 PM`;

  requestAnimationFrame(updateCountdown);
};

updateCountdown();
