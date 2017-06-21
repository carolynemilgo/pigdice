# A game of PIG DICE
## Author
Carolyne Milgo
## Description
The game allows two users to play against each other by rolling DICE
## Specifications
1. The first player rolls the dice and it returns a number between 1 and 6.
Input: 1
Output: The next player should roll the dice
input: Between 2, 3,4,5 or 6
Output: Continue rolling the dice
2. The second player only rolls the dice when the first player rolls a 1
input:1
Output: Allow player two to roll the dice
3. Player two can roll the dice and if the inputs are 2,3,4,5 or 6, he can keep rolling
input: 2,3,4,5 or 6
Output: Continue rolling the dice.
4. If either of the players are rolling the dice and the result is 1, the players forfeit all the points they had earlier
acquired and the counter resets to one
input: 1
Output: new count is 0
5. The players can hold the game at any point using the hold button and their points remain the same as they increment when they resume their turn to roll the dice.
6. The high score of 100 is set to define the winner of the game and in the event that the cumulative score for one of the players is equal to or greater than 100, that winner is declared the winner.
input: score>=50
Output: You are the winner
## Developed using
The game of pig dice is developed using HTML, CSS and Javascript
## Link
The game is accesible on github through this link:
https://carolynemilgo.github.io/pigdice/
