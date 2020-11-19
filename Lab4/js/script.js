var character = document.getElementById("character");
var block = document.getElementById("block");

var wynik=0;

// skok
function jump(){
    if (character.classList !="jump"){
      character.classList.add("jump");

      setTimeout(function() {
          character.classList.remove("jump");
        }, 700);
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
        }, 700);
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
    // probranie aktualnej pozycji
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(blockTop == 130){
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
            alert("Przegrałeś: "+Math.floor(wynik/100) + " pkt!");
            // location.reload();
            wynik=0;
            block.style.animation = "block 3s infinite linear";
        }else{
            wynik++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(wynik/100);
        
        }
    }else{
        console.log(characterTop);
        if(blockLeft<20 && blockLeft>-20 && characterTop<=150){
            block.style.animation = "none";
            alert("Przegrałeś: "+Math.floor(wynik/100) + " pkt!");
            // location.reload();
            wynik=0;
            block.style.animation = "block 3s infinite linear";
        }else{
            wynik++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(wynik/100);
        
        }
    }
}, 30);

// random
block.addEventListener('animationiteration', () =>{
    var random = Math.floor(Math.random() * 10);
    if(random<5){
        block.style.top = "100px";
        block.style.backgroundImage = "url('css/rock.png')";
    
    }else{
        block.style.top = "130px";
        block.style.backgroundImage = "url('css/rock2.png')";
    }
    
});