function showImage(image) {
  let path = "../images/" + image + ".png";
  let tnail = document.getElementById("fullview");

  tnail.src = path;
}