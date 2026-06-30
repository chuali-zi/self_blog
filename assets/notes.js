(function () {
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.note-card');
  var search = document.getElementById('note-search');

  function filter() {
    var cat = document.querySelector('.chip.active');
    var activeCat = cat ? cat.getAttribute('data-cat') : '全部';
    var q = search ? search.value.trim().toLowerCase() : '';

    cards.forEach(function (card) {
      var matchCat = activeCat === '全部' || card.getAttribute('data-cat') === activeCat;
      var text = (card.textContent || '').toLowerCase();
      var matchQ = !q || text.indexOf(q) !== -1;
      card.classList.toggle('hidden', !(matchCat && matchQ));
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      filter();
    });
  });

  if (search) search.addEventListener('input', filter);
})();
