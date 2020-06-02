let correctAnswers = 0;

let playerRank;



const answer1 = 'Who is Doug Dimmadome?';
if ( answer1.toUpperCase() === 'MOMMY' ) {
    return correctAnswers += 1
};

const answer2 = 'How many dogs are there';
if ( answer2.toUpperCase() === 'FOUR') {
    return correctAnswers += 1
};

const answer3 = 'Why arent there them?';
if (answer3.toUpperCase() === 'YES') {
    return correctAnswers += 1
};

const answer4 = 'where are they now because them?'; 
if ( answer4.toUpperCase() === 'GARP') {
    return correctAnswers += 1
};

const answer5 = 'Forp?';
if ( answer5.toUpperCase() === 'FORP') {
    return correctAnswers += 1
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




const main = document.querySelector('main');
