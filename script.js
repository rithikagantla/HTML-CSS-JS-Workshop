const duck = document.getElementById('change');

duck.addEventListener('click',function () {
  const h1Elements = document.querySelectorAll('h1');

  h1Elements.forEach( function(h1) {
    h1.textContent= 'duck';
  })
});
