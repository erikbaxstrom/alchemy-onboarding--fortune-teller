const inputContainer = document.getElementById('input-container');
const responseContainer = document.getElementById('response-container');
const displayedResponse = document.getElementById('response');

const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const fortunes = [
    'Feed me!',
    'I am hungry!',
    'My ball rolled under the couch and I cannot reach it. Please retrieve it for me.',
    'Play with me!',
];

askButton.addEventListener('click', () => {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    displayedResponse.textContent = fortune;
    inputContainer.classList.toggle('hidden');
    responseContainer.classList.toggle('hidden');
});

resetButton.addEventListener('click', () => {
    inputContainer.classList.toggle('hidden');
    responseContainer.classList.toggle('hidden');
});
