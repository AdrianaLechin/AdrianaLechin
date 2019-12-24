var height, width, color;

$("#sizePicker").submit(function(event) {
  event.preventDefault();
  height = $("#inputHeight").val(); // height of grid
  width = $("#inputWidth").val(); // width of grid
  makeGrid(height, width);
});

function makeGrid(numOfCols, numOfRows) {
  $("tr").remove();
  // loop and build grid
  for (var curCol = 1; curCol <= numOfCols; curCol++) {
    $("#pixelCanvas").append("<tr id= table" + curCol + "></tr>");
    for (var curRow = 1; curRow <= numOfRows; curRow++) {
      $("#table" + curCol).append("<td></td");
    }
  }
  // add click handler
  $("td").click(function pickedColor() {
    color = $("#colorPicker").val();
    if ($(this).attr("style")) {
      $(this).removeAttribute("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}
