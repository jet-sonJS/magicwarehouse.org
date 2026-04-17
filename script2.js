function imageZoom(imgID, resultID) {
  const img = document.getElementById(imgID);
  const result = document.getElementById(resultID);

  result.style.backgroundImage = `url(${img.src})`;

  function move(e) {
    e.preventDefault();

    const rect = img.getBoundingClientRect();

    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    result.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  }

  function show() {
    result.style.display = "block";
  }

  function hide() {
    result.style.display = "none";
  }

  img.addEventListener("mouseenter", show);
  img.addEventListener("mouseleave", hide);
  img.addEventListener("mousemove", move);

  img.addEventListener("touchstart", show);
  img.addEventListener("touchmove", move);
  img.addEventListener("touchend", hide);
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}