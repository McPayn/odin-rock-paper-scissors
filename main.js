function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(player_choice) {
    let computer_choice = getComputerChoice();
    const result1 = document.getElementById('game-result1');
    const result2 = document.getElementById('game-result2');
    result1.innerHTML = 'You: ' + player_choice;
    result2.innerHTML = 'Computer: ' + computer_choice;

    if (player_choice === 'Rock') {
        if (computer_choice === 'Paper') {
            updateScore(0);
        } else if (computer_choice === 'Scissors') {
            updateScore(1);
        }
    }

    else if (player_choice === 'Paper') {
        if (computer_choice === 'Scissors') {
            updateScore(0);
        } else if (computer_choice === 'Rock') {
            updateScore(1);
        }
    }

    else if (player_choice === 'Scissors') {
        if (computer_choice === 'Rock') {
            updateScore(0);
        } else if (computer_choice === 'Paper') {
            updateScore(1);
        }
    }
}

function updateScore(win) {
    const playerScore = document.getElementById('scoreboard');
    const compScore = document.getElementById('comp-scoreboard');
    let new_player_score = parseInt(playerScore.textContent);
    let new_comp_score = parseInt(compScore.textContent);
    if (win) { 
        new_player_score++;
        playerScore.innerText = new_player_score;
        if (new_player_score === 5) { 
            alert('You win!')
            reset();
        }
    }
    else { 
        new_comp_score++;
        compScore.innerText = new_comp_score; 
        if (new_comp_score === 5) { 
            alert('You lose :(')
            reset();
        }
    }
}

function reset() {
    document.getElementById('scoreboard').innerText = 0;
    document.getElementById('comp-scoreboard').innerText = 0;
    document.getElementById('game-result1').innerHTML = 'Welcome to Rock Paper Scissors!';
    document.getElementById('game-result2').innerHTML = '';
}