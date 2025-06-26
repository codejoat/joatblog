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