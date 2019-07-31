$(document).ready(function() {
  $('.loader-bg').hide(2000);

  $('.navbar-toggler-icon').click(function() {
    $('.nav-toggle').toggle('slow');
  });

  $('.fa-search').click(function() {
    $('.search').toggle('slow');
  });
});
