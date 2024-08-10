var button=["red","blue","green","yellow"];
var game=[];
var userpattern=[];
var start=false;
var level=0;
$(document).keydown(function(){
    if(!start){
        $("level-title").text("Level"+level);
        sequence();
        start=true;
    }
});
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userpattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userpattern.length-1);
});
function checkAnswer(currentLevel){
    if (game[currentLevel]===userpattern[currentLevel]){
        console.log("Success");
    if(userpattern.length===game.length){
        setTimeout(function(){
            sequence();
        },1000);
    
        
    }


}else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){

        
        $("body").removeClass("game-Over");
    },200);
    $("#level-title").text("Game Over,Press Any Key to Restart");
    startOver();
    }
}
function sequence(){
    userpattern=[];
    level++;
    $("level-title").text("Level"+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=button[randomNumber];
    game.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);   
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function startOver(){
    level=0;
    game=[];
    start=false;
}