function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(player_choice, computer_choice) {
    if (player_choice === computer_choice) {
        return 'It\'s a tie!';
    }

    else if (player_choice === 'rock') {
        if (computer_choice === 'paper') {
            return 'You lose!';
        } else if (computer_choice === 'scissors') {
            return 'You win!';
        }
    }

    else if (player_choice === 'paper') {
        if (computer_choice === 'scissors') {
            return 'You lose!';
        } else if (computer_choice === 'rock') {
            return 'You win!';
        }
    }

    else if (player_choice === 'scissors') {
        if (computer_choice === 'rock') {
            return 'You lose!';
        } else if (computer_choice === 'paper') {
            return 'You win!';
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let player_choice = prompt('Rock, paper, or scissors: ');
        let computer_choice = getComputerChoice().toLowerCase();
        player_choice = player_choice.toLowerCase();
        
        console.log('Computer: ' + computer_choice);
        console.log('You: ' + player_choice);
        console.log(playRound(player_choice, computer_choice));
    }
}

game();