window.addEventListener('DOMContentLoaded', ()=> {
    let button = document.getElementById('btn');
    let message = document.getElementById('message');

    showMeMsg = () => {
        message.innerHTML = "hello how are you";
    };
    button.addEventListener('click', showMeMsg);
})