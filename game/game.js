var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
function jump() {

    if (character.classList != "characterAnimate") {
        character.classList.add("characterAnimate")
        score += 10;
    }
    setTimeout(function () {
        character.classList.remove("characterAnimate")
        
    }, 500);

    
        
    

}
var checkDead = setInterval(function () {
    var charachterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && charachterTop >= 130) {
        block.style.animation = "none";
        character.style.animation = "none";
        alert("Game Over...!! " + " " + "Your Score is: " + score );
       
        
    }
    
    document.getElementById("scoreCard").innerHTML =
    "Your score is: " + score
            
    
}, 10);

