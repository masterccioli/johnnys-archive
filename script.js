// visitor counter (per-browser, localStorage)
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var n = 0;
  try {
    n = (parseInt(localStorage.getItem("hits") || "0", 10) || 0) + 1;
    localStorage.setItem("hits", String(n));
  } catch (e) { n = 1; }
  el.textContent = String(n).padStart(6, "0");
})();

// last updated = document.lastModified
(function () {
  var el = document.getElementById("updated");
  if (el) el.textContent = document.lastModified.split(" ")[0];
})();

// random link from the nav
(function () {
  var el = document.getElementById("random");
  if (!el) return;
  el.addEventListener("click", function (ev) {
    ev.preventDefault();
    var links = document.querySelectorAll("#nav a");
    if (!links.length) return;
    location.href = links[Math.floor(Math.random() * links.length)].href;
  });
})();
