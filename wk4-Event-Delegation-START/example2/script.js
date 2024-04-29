(function(){
    'use strict';

    const pops = document.querySelectorAll('.pop');
    const addCardBttn = document.querySelector('#add');
    const oneCard = document.querySelector('.card');
    const theSection = document.querySelector('section');

    // add two event listeners here...

    document.addEventListener('click', function(event){
        if(event.target.className == 'pop'){
            event.preventDefault();
            alert("Wow you popped!");
        }
    });
    
    addCardBttn.addEventListener('click', function(){
        const newCard = oneCard.cloneNode(true);
        theSection.appendChild(newCard);
    });
    
})();