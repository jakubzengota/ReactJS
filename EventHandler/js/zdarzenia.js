// #1
function WhichButton(event) {
    alert("You pressed button: " + event.button)
  }
// #2
var myBlock = document.getElementById("dwa");
myBlock.addEventListener("wheel", function(){
    myBlock.style.fontSize="35px";
})
// #3

var elem = document.documentElement;


function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}
// #4
function czwarty() {
    alert("nacisnales klawisz ktory bedzie wpisany w ramke");
  }
// #5
function piaty() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
// #6
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
// #7
document.getElementById("myBtn").addEventListener("click", siedem);
function siedem() {
  document.getElementById("siedem").innerHTML = "kliknieto";
}
// #8
var x = document.getElementById("myBtn2");
x.addEventListener("mouseover", osiem);
x.addEventListener("mouseout", osiem3);

function osiem() {
  document.getElementById("osiem").innerHTML += "najechano na przycisk!<br>"
}
function osiem3() {
  document.getElementById("osiem").innerHTML += "wyjechano poza przycisk!<br>"
}
// #9
document.addEventListener("keypress", function(event) {
    let ppp = event.code;
    document.getElementById("dziewiec").innerHTML = ppp;
})
// #10
var p1 = 5;
var p2 = 7;

document.getElementById("btnlast").addEventListener("click", function() {
  dzialanie(p1, p2);
});

function dzialanie(a, b) {
  var result = a * b;
  document.getElementById("dodaj").innerHTML = result;
}
