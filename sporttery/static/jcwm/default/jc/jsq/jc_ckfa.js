$(document).ready(function () {
  $('#myModal').on('hidden.bs.modal', function () {
    $('body').css('position', 'static');
  });
});
function timeOut() {
  var modal_dialog = $('.modal-dialog');
  modal_dialog.animate({ 'margin-top': 80 }, 100);
}
function clickCkfa() {
  if ($('#selCount').text() == '0') return;
  $('#myModal').modal('show');
  getPlan();
  const top = document.body.scrollTop || document.documentElement.scrollTop;
  $('body').css({ position: 'fixed', top: -top });
  //$('#myModal').modal({ "backdrop": "static" }).on("shown.bs.modal", function () {
  setTimeout(timeOut, 200);
  //})
}
