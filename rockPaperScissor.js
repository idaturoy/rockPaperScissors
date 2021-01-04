let buttons = document.querySelectorAll('button');
let playerScore = document.getElementById('player1');
let computerScore = document.getElementById('player2');
let scorePlayer = 0;
let scoreComputer = 0;

//Random choice of the options
function computerPlay(){
    let options =['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return options[random];
    }

//Play a round with rock paper scissors
function playRound(player, computer){

// the cases when player wins
    if ((player == 'rock' && computer == 'scissors') || (player == 'scissors' && computer == 'paper')|| (player == 'paper' && computer == 'rock')) {
        return [1, (`You win this round, since ${player} beats ${computer}.`)];
         }
    else if ((player == 'rock' && computer == 'paper')|| (player == 'scissors' && computer == 'rock')|| (player == 'paper' && computer == 'scissors')) {
        
        return [0, `You lose this round.. As ${computer} beats ${player}.`];
         }
    else if(player === computer){
        return [2, 'It\'s a draw!'];
         }
}
function game(score){

    if (score[0] === 1){
        scorePlayer += 1;}
    if (score[0] === 0){
        scoreComputer += 1;}
    //console.log('Round', i, result)
    return [scorePlayer, scoreComputer];
};

function announcer(message){
    if (scorePlayer === 5){
        document.getElementById('messageForPlayer').textContent = "Yes! You won the whole game. You\'re the best!"}
    else if (scoreComputer === 5){
        document.getElementById('messageForPlayer').textContent = "You lose the game."; }
    else {document.getElementById('messageForPlayer').textContent = message;}
    if (scorePlayer === 5 || scoreComputer === 5){scorePlayer = 0; scoreComputer = 0; };  
};

buttons.forEach(btn => { 
    btn.addEventListener('click', function(){
    score = playRound(btn.id, computerPlay());
    game(score)
    //console.log(score);
    //console.log(game(score));
    playerScore.textContent = scorePlayer;
    computerScore.textContent = scoreComputer;
    announcer(score[1])

});
});






