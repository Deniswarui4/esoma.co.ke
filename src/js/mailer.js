const url = '';
const myForm = document.querySelector('#contactForm');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myMessage = document.querySelector('#message');
myForm.addEventListener('submit', submitter);

function submitter(e) {
	console.log('submited');
	e.preventDefault();
}