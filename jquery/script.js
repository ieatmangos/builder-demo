var openMenu = document.getElementById('open-menu');
var closeMenu = document.getElementById('close-menu');
var menuWrapper = document.getElementById('mobile-menu-wrapper');

openMenu.addEventListener('click', toggleClass);
closeMenu.addEventListener('click', toggleClass);
function toggleClass() {
  console.log('scriptjs')
  menuWrapper.classList.toggle('hidden'); 
}


// Slide sub navs on Mobile
$('.has-children > a').click(function(e) {
  e.preventDefault();
  $(this).siblings('ul').removeClass('transform');
});
$('.go-back').click(function(e) {
  e.preventDefault();
  $(this).closest('.has-children').find('ul:eq(0)').addClass('transform');
});

// Slide out cart
$('#cart-trigger').click(function(e) {
  e.preventDefault();
  console.log('cart trigger')
  $('#cart-container').removeClass('hidden');
  setTimeout(function() {
    $('#cart-container').addClass('bg-opacity-50');
    $('#cart-wrapper').removeClass('transform');
  });
});

// Close Cart
$('#close-cart').click(function(e) {
  e.preventDefault();
  $('#cart-container').removeClass('bg-opacity-50');
  $('#cart-wrapper').addClass('transform');
  setTimeout(function() {
    $('#cart-container').addClass('hidden');
  }, 500);
});