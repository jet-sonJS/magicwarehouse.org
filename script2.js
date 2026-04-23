function imageZoom(imgID, resultID) {
  const img = document.getElementById(imgID);
  const result = document.getElementById(resultID);

  result.style.backgroundImage = `url(${img.src})`;

  function move(e) {
    e.preventDefault();

    const rect = img.getBoundingClientRect();

    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    const xPercent = (x / rect.width) * 200;
    const yPercent = (y / rect.height) * 200;

    result.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  }

  result.style.transition = "display 0.3s";
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

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});