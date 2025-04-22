const searchBar = document.getElementById('searchBar');
const recipeCards = document.querySelectorAll('.recipe-card');

searchBar.addEventListener('input', function () {
  const query = searchBar.value.toLowerCase();

  recipeCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
