// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready (function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(increaseGreenByBlue)
  //applyFilterNoBackground(decreaseBlue)
  //applyFilter(reddify)
  //called applyfilter inide of applyandrender so that the filter is actually used, used reddify as an argument

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var row = 0; row < image[i].length; row++) {
      var rgbString = image[i][row];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers)
      //rgbNumbers[RED] = 255;
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][row] = rgbString;
    }
  }
}
//made a function that wil actually apply the filter by iterating over the entire image or the entire images array
//made a second loop that iterates over the iterating initial loop and created two variables within the nested loop
//created a higher order function by calling a function within applyFilter
// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    for (var row = 0; row < image[i].length; row++) {
      if (image[i][row] === backColor) {
        image[i][row] === backColor;
      } else {
        var rgbString = image[i][row];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers)
        //rgbNumbers[RED] = 255;
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][row] = rgbString;
      }
    }
  }
}
//made a new function that uses applyFilter as a base, makes a new variable called backColor for the background
//compares image[i][row] to backColor to see if its equal to itself and if not then comence the rest of the code
// TODO 5: Create the keepInBounds function
function keepInBounds(numberType) {
  var temp = numberType < 0 ? 0 : numberType;
  return temp > 255 ? 255 : temp
}
//created a ternerary instead of an if statement to better utilize if the number is on the rgb index
// TODO 3: Create reddify function
function reddify(redType) {
  redType[RED] = 200
}
//adds the red color to the actual filter, changes the value to 200
// TODO 6: Create more filter functions
function decreaseBlue(blueType) {
  blueType[BLUE] = keepInBounds(BLUE - 50);
}
//created a function that will decrease the blue value of the array specified
function increaseGreenByBlue(greenishType) {
  greenishType[GREEN] = keepInBounds(BLUE + GREEN);
}
//created anpother function that will have its green index value increased by the current value of the Blue
// CHALLENGE code goes below here
