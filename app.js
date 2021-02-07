// Pływający header

window.addEventListener('scroll', function(){
    let scrollingHeader = document.querySelector('.l--header');
    scrollingHeader.classList.toggle('sticky', window.scrollY > 0);
})


// walidacja formularza

    function formValidation() {
        let form = document.getElementById('form');
        let email = document.getElementById('email').value;
        let text = document.getElementById('text');

        let pattern = /^[^]+@[^]+\.[a-z]{1,3}$/;

        if (email.match(pattern)){
            form.classList.add('valid');
            form.classList.remove('invalid');
            text.innerHTML = 'Great, your email address is valid'
            text.style.color = '#ffffff';
        } else {
            form.classList.remove('valid')
            form.classList.add('invalid')
            text.innerHTML = 'Oh no, please enter valid email address'
            text.style.color = '#000000';
        }

        if (email == ''){
            form.classList.remove('valid');
            form.classList.remove('invalid');
            text.innerHTML = ' ';
        }
    }



// Hamburger Menu

const toggleButton = document.getElementsByClassName('toggle-button')
const navbarLinks = document.getElementsByClassName('navbar-links')

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})

