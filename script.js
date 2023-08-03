

const rateNumber = document.querySelectorAll('.rate');
const btnPrompt = document.querySelector('button');
const thankYouCard = document.querySelector('.thankYouCard');
const ratingCard = document.querySelector('.rating');


for (let i = 0; i < rateNumber.length; i++) {
    rateNumber[i].addEventListener('click', function(){
        rateNumber[i].classList.add("rate-bg")
        document.querySelector('.rated').textContent = ` You selected ${rateNumber[i].textContent} out of 5`;
               // rateNumber[i].classList.remove("rate-bg");
        if(click ){

        }
    });

};




const openThankYou = function(){
    thankYouCard.classList.remove('hidden');
    ratingCard.classList.add('hidden');
};

btnPrompt.addEventListener('click', openThankYou);

