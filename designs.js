
var height,width,color;

$('#sizePicker').submit(function(event){
  event.preventDefault();
  height =$('#inputHeight').val(); //num of squares representing height of grid
  width =$('#inputWidth').val(); // num of squares representing width of grid
  makeGrid(height, width);
})
function makeGrid(n,m) {
    $('tr').remove();

// h= height w= width
    for (var h= 1; h<=n; h++){
      $('#pixelCanvas').append('<tr id= table'+ h + '></tr>');
      for (var w= 1; w <= m; w++){
        $('#table'+ h).append('<td></td');
      }
    }
      $('td').click(function pickedColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')){
          $(this).removeAttribute('style')
        }else{
          $(this).attr('style', 'background-color:'+ color);
        }

      })
}
