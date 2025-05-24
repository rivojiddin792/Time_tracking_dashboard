document.querySelectorAll('.delete-icon').forEach(icon => {
  icon.addEventListener('click', function () {
    const card = this.closest('.item');
    const bg = card.previousElementSibling;
    card.remove();
    bg.remove();
  });
});