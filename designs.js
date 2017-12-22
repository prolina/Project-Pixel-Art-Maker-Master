const heightInput = $('#input_height');
const widthInput = $('#input_width');
const colorInput = $('#colorPicker');



makeGrid = () => {

// remember: makeGrid function removes previous table
//and built new grid with help of for-loop

  let heightValue = heightInput.val();
  let widthValue = widthInput.val();

  let pixelCanvas = $('#pixel_canvas');
  pixelCanvas.children().remove();
  // clears previously built table if any grid is built

  for (let h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let w = 0; w < widthValue; w++) {
    $('tr').append("<td></td>");
  }
}

//changes the background color of the cell
//with chosen color

$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});

form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault();
    // stops page from refreshing upon submit
    makeGrid();
});
