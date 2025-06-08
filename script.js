const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const card7 = document.getElementById('card7');
const card8 = document.getElementById('card8');
const card9 = document.getElementById('card9');

const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

document.getElementById("resetButton").addEventListener("click", function() {
    cards.forEach(card => {
        card.style.display = "inline-block";  // Reset display property to make all cards visible again
    });
});

function hideCard(card) {
    card.addEventListener('click', function () {
      this.style.display = "none";
    });  
}

cards.forEach(card => {
    if (card) hideCard(card); // Only attach if the element exists
});

