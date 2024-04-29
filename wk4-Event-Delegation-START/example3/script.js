(function(){
    'use strict';

    const pops = document.querySelectorAll('.pop');
    const switches = document.querySelectorAll('.change');
    const addCardBttn = document.querySelector('#add');
    const oneCard = document.querySelector('.card');
    const theSection = document.querySelector('section');
    const body = document.querySelector('body');

    // Add event listeners here...
    document.addEventListener('click', function(event){
        if(event.target.className == 'pop'){
            event.preventDefault();
            alert("Wow you popped!");
        }
        if (event.target.className == 'change'){
            event.preventDefault();
            if(body.className == 'light'){
                body.className = 'dark';
            } else {
                body.className = 'light';
            }
        }
    });
    
    
    addCardBttn.addEventListener('click', function(){
        const newCard = oneCard.cloneNode(true);
        theSection.appendChild(newCard);
    });

})();