(function () {
  var mdFile = document.body.getAttribute('data-md');
  var el = document.getElementById('article-content');
  if (!mdFile || !el) return;

  marked.setOptions({ breaks: true, gfm: true });

  fetch(mdFile)
    .then(function (res) {
      if (!res.ok) throw new Error('加载失败: ' + res.status);
      return res.text();
    })
    .then(function (text) {
      el.innerHTML = marked.parse(text);
      el.querySelectorAll('a[href$=".html"]').forEach(function (a) {
        var href = a.getAttribute('href');
        if (href && href.indexOf('://') === -1) {
          a.setAttribute('href', href);
        }
      });
    })
    .catch(function (err) {
      el.innerHTML = '<p class="article-error">文章加载失败：' + err.message + '</p>';
    });
})();
