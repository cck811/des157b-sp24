(function(){
    
    'use strict'; // Enables strict mode for more secure JavaScript

    $('h1').css('color', 'green');

    setTimeout(function () {
        document.querySelector('h1').style.color = "red";
    }, 2000); //same as the jquery


    $('p').css('color', 'pink');

    const myPs = document.querySelectorAll('p');
    for (const eachP of myPs) {
        eachP.style.color = "green";
    } //jquery can replace the trouble of loops

    $('a').click(function () {
        console.log(this.innerHTML);
    });

})();

