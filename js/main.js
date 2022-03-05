var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elFormText = document.querySelector('.form__text');

elForm.addEventListener('submit', function(event){
    event.preventDefault();

    if (isNaN(elInput.value)) {
        alert('Iltimos raqam kiriting!')
        
        return
    }

    if ((elInput.value % 3) == 0) {
        elFormText.textContent = "Fizz"
    } if ((elInput.value % 5) == 0) {
        elFormText.textContent = "Buzz"
    } if (((elInput.value % 3) == 0) && ((elInput.value % 5) == 0)) {
        elFormText.textContent = "FizzBuzz"
    } if (((elInput.value % 3) != 0) && ((elInput.value % 5) != 0)) {
        elFormText.textContent = "Bu son 3 va 5 ga bo'linmaydi!"
    }
})