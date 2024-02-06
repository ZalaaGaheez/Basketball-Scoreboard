let homeCount = 0;
let guestCount = 0;

const homeScoreBoard = document.getElementById("home-score");
const guestScoreBoard = document.getElementById("guest-score");
const homeButtons = document.querySelectorAll('.btn-home');
const guestButtons = document.querySelectorAll('.btn-guest');
const resetBtn = document.getElementById('reset-btn');
const saveBtn = document.getElementById('save-btn');
const saveMessage = document.getElementById("save-message"); 

homeButtons.forEach(button => {
   button.addEventListener('click', () => {
    console.log('home button clicke');
        homeCount += parseInt(button.value);
        homeScoreBoard.textContent = homeCount;
    });
});

guestButtons.forEach(button => {
    button.addEventListener('click', () => {
        guestCount += parseInt(button.value);
        guestScoreBoard.textContent = guestCount;
    });
});

resetBtn.addEventListener('click', () => {
    homeCount = 0;
    guestCount = 0;
    homeScoreBoard.textContent = homeCount;
    guestScoreBoard.textContent = guestCount;
    saveMessage.textContent=`Home Score: ${homeCount}, Guest Score: ${guestCount}`;
});

saveBtn.addEventListener('click', () => {
    saveMessage.textContent = `Home Score: ${homeCount}, Guest Score: ${guestCount}`;
    saveMessage.style.display = 'inline-block';
});