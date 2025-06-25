const dateEl = document.getElementById("current-date");
if (dateEl) {
  dateEl.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const postSelect = document.getElementById('post-select');
  if (postSelect) {
    postSelect.addEventListener('change', function () {
      const target = document.getElementById(this.value);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});