$(function () {
  var $newItemButton = $("#newItemButton");
  var $newItemForm = $("#newItemForm");
  var $textInput = $("input:text");

  $newItemButton.show();
  $newItemForm.hide();

  $("#showForm").click(function () {
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on("submit", function (e) {
    e.preventDefault();
    var newText = $("input:text").val();
    $("li:last").after("<li>" + newText + "</li>");
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val("");
  });
  $("#buton").click(function () {
    $("li:last").remove();
  });
});
