let correctAnswers = 0;

let playerRank;
const main = document.querySelector('main');



const answer1 = prompt('Who is Doug Dimmadome?');
if ( answer1.toUpperCase() === 'MOMMY' ) {
    correctAnswers += 1
};

const answer2 = prompt('How many dogs are there');
if ( answer2.toUpperCase() === 'FOUR') {
    correctAnswers += 1
};

const answer3 = prompt('Why arent there them?');
if (answer3.toUpperCase() === 'YES') {
    correctAnswers += 1
};

const answer4 = prompt('where are they now because them?'); 
if ( answer4.toUpperCase() === 'GARP') {
    correctAnswers += 1
};

const answer5 = prompt('Forp?');
if ( answer5.toUpperCase() === 'FORP') {
    correctAnswers += 1
};

if ( correctAnswers === 5 ) {
    playerRank = 'Gold';
} else if ( correctAnswers >= 3) {
    playerRank = 'Silver';
} else if ( correctAnswers >= 2) {
    playerRank = 'Bronze';
} else {
    playerRank = 'You Lost';
}

main.innerHTML = `<h1>you got ${correctAnswers} right</h1>
                 <p>you earned ${playerRank}</p>`



