const oanButton = document.getElementById('oan');
const tutiButton = document.getElementById('tuti');
const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computerChoice');
const historyList = document.getElementById('history-list');

const choices = ['oẳn', 'tù tì'];
let history = [];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Hòa';
    } else if (userChoice === 'oẳn' && computerChoice === 'tù tì') {
        return 'Bạn thắng!';
    } else if (userChoice === 'tù tì' && computerChoice === 'oẳn') {
        return 'Bạn thua!';
    } else {
        return 'Có lỗi xảy ra!';
    }
}

function updateHistory(userChoice, computerChoice, result) {
    const historyItem = document.createElement('li');
    historyItem.textContent = `Bạn: ${userChoice}, Máy: ${computerChoice} - ${result}`;
    historyList.appendChild(historyItem);
    history.push({ userChoice, computerChoice, result });
}

oanButton.addEventListener('click', function() {
    const userChoice = 'oẳn';
    const computerChoice = computerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = result;
    computerChoiceDiv.textContent = `Lựa chọn của máy: ${computerChoice}`;
    updateHistory(userChoice, computerChoice, result);
});

tutiButton.addEventListener('click', function() {
    const userChoice = 'tù tì';
    const computerChoice = computerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = result;
    computerChoiceDiv.textContent = `Lựa chọn của máy: ${computerChoice}`;
    updateHistory(userChoice, computerChoice, result);
});
