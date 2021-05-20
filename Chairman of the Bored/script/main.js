const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.form-container input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	inputs.forEach((input) => {
		// console.log(input.value);
		if (!input.value) {
			input.parentElement.classList.add('error');
		} else {
			input.parentElement.classList.remove('error');
      pageRedirect();
      alert("You have been signed up");

			if (input.type == 'email') {
				if (validateEmail(input.value)) {
					input.parentElement.classList.remove('error');
              pageRedirect();
      alert("You have been signed up");
				} else {
					input.parentElement.classList.add('error');
				}
			}
		}
	});
});


function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function pageRedirect(){
  window.location.replace("index.html");

}

