const grid_size = 750;

function generateGrid(size, maxWidth) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  let cellWidth = maxWidth / size - 2;
  for (let i = 0; i < size; i++) {
    var new_row = document.createElement("div");
    new_row.classList.add("row");
    new_row.setAttribute("id", "row " + i.toString());
    grid.appendChild(new_row);

    for (let j = 0; j < size; j++) {
      var new_cell = document.createElement("div");
      new_cell.classList.add("cell");
      new_cell.setAttribute("id", "cell " + j.toString());
      new_cell.setAttribute("onMouseOver", "colorCell(this)");
      new_cell.setAttribute("onMouseDown", "paintThisCell(this)");

      new_cell.style.width = cellWidth + "px";
      new_cell.style.height = cellWidth + "px";

      document.getElementById("row " + i.toString()).appendChild(new_cell);
    }
  }
}

let penDown = false;
let mode = "pen";
var hue = 0;

function paintThisCell(cell) {
  penDown = true;
  colorCell(cell);
}

function colorCell(cell) {
  if (penDown) {
    if (mode == "pen") {
      var colorpicker = document.getElementById("colorpicker");

      cell.style.backgroundColor = colorpicker.value;
    } else if (mode == "rainbow") {
      //   var letters = "0123456789ABCDEF";
      //   var color = "#";

      //   for (var i = 0; i < 6; i++) {
      //     color += letters[Math.floor(Math.random() * 16)];
      //   }

      var color = "hsl(" + (hue % 360) + ", 100%, 50%)";
      console.log(color);

      hue += 8;

      cell.style.backgroundColor = color;
    } else if (mode == "shading") {
      var currentColor = cell.style.backgroundColor;
      if (!(currentColor.includes("rgb") || currentColor.includes("#"))) {
        cell.style.backgroundColor = "#FFFFFF";
        currentColor = cell.style.backgroundColor;
      }

      var rgbValues = currentColor.match(/\d+/g);
      var red = parseInt(rgbValues[0]);
      var green = parseInt(rgbValues[1]);
      var blue = parseInt(rgbValues[2]);

      //---------
      var colorpicker = document.getElementById("airbrushcolorpicker");

      var pickerRgbValues = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorpicker.value);
      var pickerRed = parseInt(pickerRgbValues[1], 16);
      var pickerGreen = parseInt(pickerRgbValues[2], 16);
      var pickerBlue = parseInt(pickerRgbValues[3], 16);

      console.log(pickerRgbValues);

      //-------

      var newRed = Math.round(red * 0.9 + pickerRed * 0.1);
      var newGreen = Math.round(green * 0.9 + pickerGreen * 0.1);
      var newBlue = Math.round(blue * 0.9 + pickerBlue * 0.1);
      cell.style.backgroundColor = "rgb(" + newRed + ", " + newGreen + ", " + newBlue + ")";
    } else if (mode == "eraser") {
      cell.style.backgroundColor = "#FFFFFF";
    }
  }
}

function setPenMode() {
  document.getElementById(mode).classList.remove("selected");
  mode = "pen";
  document.getElementById("pen").classList.add("selected");
}

function setEraserMode() {
  document.getElementById(mode).classList.remove("selected");
  mode = "eraser";
  document.getElementById("eraser").classList.add("selected");
}

function setShadingMode() {
  document.getElementById(mode).classList.remove("selected");
  mode = "shading";
  document.getElementById("shading").classList.add("selected");
}

function setRainbowMode() {
  document.getElementById(mode).classList.remove("selected");
  mode = "rainbow";
  document.getElementById("rainbow").classList.add("selected");
}

window.addEventListener("load", function () {
  var output = document.getElementById("size-display");

  generateGrid(16, grid_size);
  output.innerHTML = 16 + "x" + 16;

  var slider = document.getElementById("slider");

  slider.oninput = function () {
    var output = document.getElementById("size-display");
    console.log(this.value);
    output.innerHTML = this.value + "x" + this.value;
  };

  slider.onmouseup = function () {
    generateGrid(this.value, grid_size);
  };
});

window.addEventListener("mousedown", function () {
  penDown = true;
});

window.addEventListener("mouseup", function () {
  penDown = false;
});

function clearGrid() {
  var slider = document.getElementById("slider");
  generateGrid(slider.value, grid_size);
}

let gridEnabled = true;

function toggleGridLines() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    if (gridEnabled) {
      cells[i].style.outline = "1px solid transparent";
    } else {
      cells[i].style.outline = "1px solid lightgrey";
    }
  }
  gridEnabled = !gridEnabled;
}
