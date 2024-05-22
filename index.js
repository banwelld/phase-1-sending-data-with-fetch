document.addEventListener('keydown', formSubmit);

function submitData(name, email) {
	const formData = {
		name: `${name}`,
		email: `${email}`,
	};
	
	const configObj = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify(formData),
	};

	return fetch('http://localhost:3000/users', configObj)
		.then(function(resp) {
			return resp.json();
		})
		.then(function(obj) {
			document.querySelector('body').innerHTML = `${document.querySelector('body').innerHTML} ${obj.id}`;
		})
		.catch(function(error) {
			alert('We got trouble!');
			document.querySelector('body').innerHTML = `${document.querySelector('body').innerHTML} ${error.message}`;
		});
}

function formSubmit(event) {
	if(event.key === 'F2') {
		const formName = document.querySelector('input#name');
		const formEmail = document.querySelector('input#email');
		submitData(formName.value, formEmail.value);
		formName.parentElement.parentElement.reset();
	}
}