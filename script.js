window.onresize = screen;
function screen() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  document.getElementById("size").innerHTML =
    "width is " + width + " and height is " + height;
}
