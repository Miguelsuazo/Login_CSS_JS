//Forms
const formFields = document.getElementById('login-form');//login Form
const signForm = document.getElementById('signup-form');//Register Form

//Containers
const sectionHome = document.querySelector('.home');//Section main
const loginContainer = document.querySelector('.form-container');//login container

//buttons / objets/ icons
const buttOpenLog = document.getElementById('form-openLogin');//button header login
const buttonIntoWeb = document.querySelector('.buttonEnter');//button 'entrar'

const aLinkRegister = document.querySelector('.register-sign') //<a> from register form
const aLinkSignup = document.querySelector('.login-sign');//text <a>'no tienes cuenta?'

const iconsPwHide = document.querySelectorAll('.hpass');//all passh icons form
const iconFormClose = document.querySelector('.form-close');//icon X form



function defaultContainers() {//reset to original containers
    if (loginContainer.classList.contains('active')) {//return to login page main
        loginContainer.classList.remove('active');
    }
}

buttOpenLog.addEventListener('click', () => {//open login from header
    defaultContainers();
    formFields.reset();
    sectionHome.classList.add('show')
});

iconFormClose.addEventListener('click', () => {// X close login from header
    sectionHome.classList.remove('show');

});

aLinkSignup.addEventListener('click', (e) => { //open signup from register
    signForm.reset();
    e.preventDefault();
    loginContainer.classList.add('active');//display:block from css
});

aLinkRegister.addEventListener('click', (e) => {//open login from signup
    signForm.reset();
    e.preventDefault();
    loginContainer.classList.remove('active');
});

// change type input from forms to 'text' to 'password' and icons
iconsPwHide.forEach(ico => { //get all icons with class pwhide
    document.addEventListener('click', (e) => {
        let pwInput = ico.parentElement.querySelector('input');//get de parent input

        if (e.target.classList.contains('hpass') && pwInput.type === 'text' || e.target.classList.contains('form-close')) {
            pwInput.type = 'password';//change type textInput to passInput
            ico.classList.replace('fa-eye', 'fa-eye-slash');//replace to slash eye icon

        } else if (e.target.classList.contains('hpass') && pwInput.type === 'password') {
            pwInput.type = 'text';//return type to password
            ico.classList.replace('fa-eye-slash', 'fa-eye');
        }
    })
})
