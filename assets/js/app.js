// Variables



// Event Listeners
eventListeners();

function eventListeners() {
    // Form submission
    document.querySelector("#form").addEventListener('submit', newTweet);
}


// Functions

function newTweet(e) {
    e.preventDefault();

    console.log('Form Submitted');
}