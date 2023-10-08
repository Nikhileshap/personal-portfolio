const form = document.querySelector('.form');

const form_success = document.createElement('p');
form_success.textContent = 'Your form has been submitted successfully. I will get back to you shortly ❤️';
form_success.setAttribute('class', 'success');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    form.elements['name'].value = '';
    form.elements['email'].value = '';
    form.elements['message'].value = '';

    console.log('Your form has been submitted successfully!');

    form.appendChild(form_success);
})