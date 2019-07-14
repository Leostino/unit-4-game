$(document).ready(function(){

 //declare the variables

 var wins = 0, losses = 0, score = 0;

 //update the dom

 $("#win").html(wins);
 $("#loss").html(losses);
 $("#score").html(score);

 //pick a random number and display to the player

 var randomNumber = Math.floor(Math.random() * 120) + 19;

 $("#random-num").html(randomNumber);

 //pick random numbers for each of the crystal buttons

 var blueCrystal = Math.floor(Math.random() * 12) + 1;

 var greenCrystal = Math.floor(Math.random() * 12) + 1;

 var redCrystal = Math.floor(Math.random() * 12) + 1;

 var purpleCrystal = Math.floor(Math.random() * 12) + 1;


 // blueCrystal()

 $("#blue-crystal").on("click", function(){
    score = score + blueCrystal;
    console.log(score);
    $("#score").html(score);
    gameCondition();
 });

 // greenCrystal()

 $("#green-crystal").on("click", function(){
    score = score + greenCrystal;
    console.log(score);
    $("#score").html(score);
    gameCondition();
 });

 // redCrystal()

 $("#red-crystal").on("click", function(){
   score = score + redCrystal;
   console.log(score);
   $("#score").html(score);
   gameCondition();
 });

 // purpleCrystal()

 $("#purple-crystal").on("click", function(){
    score = score + purpleCrystal;
    console.log(score);
    $("#score").html(score);
    gameCondition();
 });

 // reset()

 function reset() {
    score = 0;
    randomNumber = Math.floor(Math.random() * 120) + 19;
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    redCrystal = Math.floor(Math.random() * 12) + 1;
    purpleCrystal = Math.floor(Math.random() * 12) + 1;
    $("#win").html(wins);
    $("#loss").html(losses);
    $("#score").html(score);
    $("#random-num").html(randomNumber);
   }

   // gameCondition()

    function gameCondition(){
        if (score === randomNumber) {
            wins++;
            $("#win").html(wins);
            reset();
        }else if(score > randomNumber) {
            losses++;
            $("#loss").html(losses);
            reset();
        }
    }
});