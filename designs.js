// Select color input
// Select size input
var height,width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  height =$('#inputHeight').val();
  width =$('#inputWidth').val();
  makeGrid(height, width);
})
function makeGrid(n,m) {
    $('tr').remove();

// Your code goes here!
    for (var h= 1; i<=n; h++){
      $('#pixelCanvas').append('<tr id= table'+ h + '></tr>');
      for (var w= 1; w <= m; w++){
        $('#table'+ h).append('<td></td');
      }
    }
      $('td').clicked(function pickedColor() {
        color = $('#colorPicker').val();
        if ($(click).attribute('style')){
          $(click).removeAttribute('style')
        }else{
          $(click).attribute('style', 'background-color:'+ color);
        }

      })
}
