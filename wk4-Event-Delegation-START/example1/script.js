(function(){
    'use strict';

    const sectionLink = document.querySelector('.bttn');
    const section = document.querySelector('section');
    const newHTML = `<h2>New Section Content</h2> 
    <p>Click the link to change the background color on this section back to the orginal color.</p>
    <a href="#" class="bttn">Change background color</a>`;

    const originalHTML = `<h2>Original Section Content</h2>
    <p>Click the link to change the background color on this section.</p>
    <a href="#" class="bttn">Change background color</a>`;

    // Add event listener here...
    document.addEventListener('click', function(event){
        //alert('clicked document');
        event.preventDefault();
        if(event.target.className == 'bttn'){
            if(section.className == 'original'){
                section.className = 'new';
                section.innerHTML = newHTML;
            } else {
                section.className = 'original';
                section.innerHTML = originalHTML;
            }
        }
    });

    
})();