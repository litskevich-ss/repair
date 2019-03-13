$(document).ready(function () {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var callme = $('#callme');
  var ordercall = $('#ordercall');

  button.on('click', function () {
    callme.removeClass("animated").addClass("animated");
    modal.addClass('modal_active');
  });

  close.on('click', function () {
    modal.removeClass('modal_active');
  });

  ordercall.on('submit', function () {

    var validator = $("#modal-form").validate();
    validator.form();

    modal.removeClass('modal_active');

  });

});