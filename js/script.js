
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
  var newPlayerB=new playerB(playerTwo);
  var playerTwo=0;
  //var totalForA=scoreplayerA.reduce(function (a, playerOne){return a + playerOne;},0);
  $("form#playerA").submit(function(event){
    event.preventDefault();
    var randomNumberA=Math.floor(Math.random() * 6) + 1;
    if(randomNumberA===1){
      alert("Burnt!!");
      $("button#buttonA").prop('disabled',true);
      $("button#buttonB").prop('disabled',false);
      //playerOne=0;
    }
    else{
        playerOne+=randomNumberA;
      }
    //  console.log(playerOne);
      $("h4#playerOne").text(playerOne);
      //$("#playerOne").text(newPlayerA.scoreA());
    //  $("h4#playerOne").text("<span class='resultA'>" + playerOne() + "</span>");
  });
  $("form#playerB").submit(function(event){
    event.preventDefault();
    var randomNumberB=Math.floor(Math.random() * 6) + 1;
    if(randomNumberB===1){
      alert("Burnt!!");
      $("button#buttonB").prop('disabled',true);
      $("button#buttonA").prop('disabled',false);
      //playerTwo=0;
    }
    else{
      playerTwo+=randomNumberB;
    }

//     if($("button#buttonA").prop('disabled',true)){
//       $("button#buttonB").prop('disabled',false);
//     }
//     else ($("button#buttonB").prop('disabled',true)){
//       $("button#buttonA").prop('disabled',false);
// }
$("h4#playerTwo").text(playerTwo);
    console.log(playerTwo);
    //$("#playerTwo").text(newPlayerB.scoreB());
  });
});
//playerB
/*
  var newPlayerB=new playerB(playerTwo);
  var PlayerTwo=0;
*/
