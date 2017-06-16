
function playerA(randomA){
  this.randomA=randomA;
}
function playerB(randomB){
  this.randomB=randomB;
}
//prototypes
playerA.prototype.scoreA=function(){
  return this.randomA;
}
playerB.prototype.scoreB=function(){
  return this.randomB;
}
//playerA
$(document).ready(function(){
  //var scorePlayerA=[];
  var newPlayerA=new playerA(playerOne);
  var playerOne=0;
  //var totalForA=scoreplayerA.reduce(function (a, playerOne){return a + playerOne;},0);
  $("form#playerA").submit(function(event){
    event.preventDefault();
    var randomNumberA=Math.floor(Math.random() * 6) + 1;
    if(randomNumberA===1){
      alert("Burnt!!");
    }
    else{
        playerOne+=randomNumberA;
      }
    //scorePlayerA.push(randomNumberA);
    //var scorePlayerA=[];
    console.log(playerOne);
    // if(newPlayerA<=6){
    //   scorePlayerA.push(newPLayerA);
    // }
      //return newPlayerA+=newPlayerA;
      // else if (newPLayerA===1){
      //   alert("Allow the other player to roll the dice");
      //   console.log(scorePlayerA);}
    //console.log(newPlayerA);
  //$("#playerOne").text(newPlayerA.scoreA());
  });
});
//playerB
$(document).ready(function(){
  $("form#playerB").submit(function(event){
    event.preventDefault();
    var playerTwo=Math.floor(Math.random() * 6) + 1;
    var newPlayerB=new playerB(playerTwo);
    //console.log(newPlayerB);
    $("#playerTwo").text(newPlayerB.scoreB());
  });
});
