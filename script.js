// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg
function resetButton() {
  document.getElementById("s0").classList.add("translucent");
  document.getElementById("s1").classList.remove("translucent");
  document.getElementById("s2").classList.remove("translucent");
  document.getElementById("s3").classList.remove("translucent");
  document.getElementById("s4").classList.remove("translucent");
  document.getElementById("img1").src = "images/home page/home1.jpg";
  document.getElementById("img2").src = "images/home page/home2.png";
  document.getElementById("img3").src = "images/home page/home3.jpg";
  document.getElementById("img4").src = "images/home page/home4.jpg";
  document.getElementById("img4").src = "images/movie posters/rainyposter.jpg";
  document.getElementById("facebook").pause();
  document.getElementById("wardrobe").pause();
  document.getElementById("camera").pause();
  document.getElementById("arrakis").pause();
}
function factsDiv() {
  document.getElementById("s1").classList.add("translucent");
  document.getElementById("s0").classList.remove("translucent");
  document.getElementById("s2").classList.remove("translucent");
  document.getElementById("s3").classList.remove("translucent");
  document.getElementById("s4").classList.remove("translucent");
  document.getElementById("img1").src = "images/facts/fact1.jpg";
  document.getElementById("img2").src = "images/facts/fact3.jpg";
  document.getElementById("img3").src = "images/facts/fact2.jpg";
  document.getElementById("img4").src = "images/facts/fact4.jpg";
  document.getElementById("wardrobe").pause();
  document.getElementById("arrakis").pause();
  document.getElementById("camera").pause();
  document.getElementById("facebook").play();
}
function wardrobeDiv() {
  document.getElementById("s2").classList.add("translucent");
  document.getElementById("s0").classList.remove("translucent");
  document.getElementById("s1").classList.remove("translucent");
  document.getElementById("s3").classList.remove("translucent");
  document.getElementById("s4").classList.remove("translucent");
  document.getElementById("img1").src = "images/outfits/outfit1.jpg";
  document.getElementById("img2").src = "images/outfits/outfit2.jpg";
  document.getElementById("img3").src = "images/outfits/outfit3.jpg";
  document.getElementById("img4").src = "images/outfits/outfit4.jpg";
  document.getElementById("facebook").pause();
  document.getElementById("arrakis").pause();
  document.getElementById("camera").pause();
  document.getElementById("wardrobe").play();
}
function moviesDiv() {
  document.getElementById("s3").classList.add("translucent");
  document.getElementById("s0").classList.remove("translucent");
  document.getElementById("s1").classList.remove("translucent");
  document.getElementById("s2").classList.remove("translucent");
  document.getElementById("s4").classList.remove("translucent");
  document.getElementById("img1").src = "images/movie posters/duneposter.jpg";
  document.getElementById("img2").src =
    "images/movie posters/bonesandallposter.jpg";
  document.getElementById("img3").src =
    "images/movie posters/ladybirdposter.jpg";
  document.getElementById("img4").src = "images/movie posters/rainyposter.jpg";
  document.getElementById("facebook").pause();
  document.getElementById("wardrobe").pause();
  document.getElementById("camera").pause();
  document.getElementById("arrakis").play();
}
function modelingDiv() {
  document.getElementById("s4").classList.add("translucent");
  document.getElementById("s0").classList.remove("translucent");
  document.getElementById("s1").classList.remove("translucent");
  document.getElementById("s2").classList.remove("translucent");
  document.getElementById("s3").classList.remove("translucent");
  document.getElementById("img1").src = "images/modeling/model1.jpg";
  document.getElementById("img2").src = "images/modeling/model2.jpg";
  document.getElementById("img3").src = "images/modeling/model3.jpg";
  document.getElementById("img4").src = "images/modeling/model4.jpg";
  document.getElementById("facebook").pause();
  document.getElementById("wardrobe").pause();
  document.getElementById("arrakis").pause();
  document.getElementById("camera").play();
}
//function stopAllAudio() {
//document.getElementById("camera").pause();
//document.getElementById("camera").currentTime = 0;
//document.getElementById("arrakis").pause();
//}
// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
