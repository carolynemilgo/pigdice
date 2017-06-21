//Business Logic
function playerA(randomA) {
  this.randomA = randomA;
}
function playerB(randomB) {
  this.randomB = randomB;
}
playerA.prototype.holdOne = function() {
  $("button#buttonA").prop('disabled', true);
  $("button#buttonB").prop('disabled', false);
  $("button#holdA").prop('disabled', true);
  $("button#holdB").prop('disabled', false);
  alert("You have hold your cards");
}
playerB.prototype.holdTwo = function() {
  $("button#buttonA").prop('disabled', false);
  $("button#buttonB").prop('disabled', true);
  $("button#holdB").prop('disabled', true);
  $("button#holdA").prop('disabled', false);
  alert("You have hold your cards");
}
//User Interface LOgic
//playerA
$(document).ready(function() {
  var newPlayerA = new playerA(playerOne);
  var playerOne = 0;
  var newPlayerB = new playerB(playerTwo);
  var playerTwo = 0;
  $("form#playerA").submit(function(event) {
    event.preventDefault();
    var randomNumberA = Math.floor(Math.random() * 6) + 1;
    if (randomNumberA === 1) {
      alert("Hahaaaa...You have burnt!!!!");
      $("button#buttonA").prop('disabled', true);
      $("button#buttonB").prop('disabled', false);

      playerOne = 0;
      $("button#holdB").prop('disabled', false);
      $("button#buttonB").prop('disabled', false);
    } else {
      playerOne += randomNumberA;
    }
    //winner and score set to 100
    if (playerOne >= 100) {
      alert("You are the winner Player1");
    }
    $("h4#playerOne").text(playerOne);
  });
  $("form#hold").submit(function(event) {
    event.preventDefault();
    newPlayerA.holdOne();
  });
  //Player Two
  $("form#playerB").submit(function(event) {
    event.preventDefault();
    var randomNumberB = Math.floor(Math.random() * 6) + 1;
    if (randomNumberB === 1) {
      alert("Hahaaaa...You have burnt!!");
      $("button#buttonB").prop('disabled', true);
      $("button#buttonA").prop('disabled', false);
      playerTwo = 0;
    } else {
      playerTwo += randomNumberB;
    }
      //winner and score set to 100
    if (playerTwo >= 100) {
      alert("You are the winner Player2");
    }
    $("h4#playerTwo").text(playerTwo);
    console.log(playerTwo);
  });
  $("form#hold2").submit(function(event) {
    event.preventDefault();
    newPlayerB.holdTwo();
  });
});
