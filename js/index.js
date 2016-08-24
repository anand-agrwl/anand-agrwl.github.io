$('document').ready(function() {

  $('.nav-button').on('click', function() {
    var $this = $(this);
    $this.siblings('a').removeClass('active');
    $this.closest('ul').find('a').removeClass('active');
    $this.addClass('active');
  });

});
