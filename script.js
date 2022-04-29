let countNumber = document.querySelector('.count-number');
const positiveBtn = document.querySelector('.positive');
const nagetiveBtn = document.querySelector('.nagetive');

let number = 0;

// Number increment 
positiveBtn.addEventListener('click', (e) =>{
    number++;
    countNumber.innerText = number;

    if(number > 10){
        countNumber.classList.add('danger-color')
    }

    if(number > 0){
        // document.querySelector('.warning-text').innerText = '';
        document.querySelector('.warning-text').innerText = '';
    }
})


// Number Decrement 
nagetiveBtn.addEventListener('click', (e) =>{
    if(number >= 1){
        number--
        countNumber.innerText = number;
    }else{
        document.querySelector('.warning-text').innerText = 'Nagetive number are not allow..';
        document.querySelector('.warning-text').classList.add('danger-color')
    }

    if(number <= 10){
        countNumber.classList.remove('danger-color');
    }
})