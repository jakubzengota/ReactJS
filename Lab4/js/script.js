var character = document.getElementById("character");
var block = document.getElementById("block");
var wynik=0;

// skok
function jump(){
    if (character.classList !="jump"){
      character.classList.add("jump");

      setTimeout(function() {
          character.classList.remove("jump");
        }, 500);
    }
}
document.addEventListener("keydown", e => {
    if(e.code.startsWith('ArrowUp')){
    jump();
    }
});



// kucanie
function crouch(){
    if (character.classList !="crouch"){
      character.classList.add("crouch");
      
      setTimeout(function() {
          character.classList.remove("crouch");
          character.style.backgroundImage = "url('css/dino.png')";
        }, 300);
        character.style.backgroundImage = "url('css/dino2.png')";
    }
}
document.addEventListener("keydown", e => {
    if(e.code.startsWith('ArrowDown')){
    crouch();
    }
});

// // skok
// function jump(){
//     if(character.classList == "animate"){return}
//     character.classList.add("animate");

//     // opóznienie klikania
//     setTimeout(function(){
//         character.classList.remove("animate");
//     },500);
// }

// sprawdzanie kolizji
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        // alert("Game Over. score: "+Math.floor(wynik/100));
        // location.reload();
        wynik=0;
        block.style.animation = "block 3s infinite linear";
    }else{
        wynik++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(wynik/100);
    }
}, 30);