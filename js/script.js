
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
  $("form#playerA").submit(function(event){
    event.preventDefault();
    var playerOne=Math.floor(Math.random() * 6) + 1;
    var newPlayerA=new playerA(playerOne);
    //console.log(newPlayerA);
  $("p#playerOne").append("<span class='resultA'>" + newPlayerA.scoreA() + "</span></p>");
  });
});
//playerB
$(document).ready(function(){
  $("form#playerB").submit(function(event){
    event.preventDefault();
    var playerTwo=Math.floor(Math.random() * 6) + 1;
    var newPlayerB=new playerB(playerTwo);
    //console.log(newPlayerB);
    $("p#playerTwo").append("<span class='resultB'>" + newPlayerB.scoreB() + "</span></p>");
  });
});
