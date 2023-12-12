const btn = document.getElementById("btn");
const modalPage = document.getElementById("mP");
const emailInput = document.getElementById("name");
const modalButton = document.getElementById('modalButton');
const errorMsg = document.getElementsByClassName('.errorMsg');
const modalEmail = document.getElementById('modalEmail');

btn.addEventListener("click", function(event){
    event.preventDefault();

    const emailValue = emailInput.value;
    if (isValidEmail(emailValue)) {
        modalEmail.textContent = emailValue;
        modalPage.style.visibility = 'visible';
        modalButton.style.backgroundColor = 'green';
        setTimeout(function(){
            modalPage.style.visibility = 'hidden';
            modalEmail.textContent = '';
        }, 3000);

        emailInput.value = '';
    } else{
        showError();
    }

});
modalButton.addEventListener("click", function(){
    modalPage.style.visibility = 'hidden';
    modalEmail.textContent = '';
});


//Function To Validate Email Foemat
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

//Function To Show Error
function showError(){
    errorMsg.style.display = 'block';
}

// Event listener for email input to hide error message while typing

emailInput.addEventListener("input", function() {
    const emailValue = emailInput.value;
    if (isValidEmail(emailValue)) {
        errorMsg.style.display = 'none';
    } else {
        showError();
    }
});