
(function(){
	"use strict";
	
	//add script here...
	function selectTab(event){
		event.preventDefault();
		for( const eachTab of tabs){
			eachTab.removeAttribute('class');
		}
		event.target.className = 'active';

		const thisTab = event.target.getAttribute('href');
		const thisContent = document.querySelector(thisTab);
		
		const oldTabContent = document.querySelector('.visible');
		oldTabContent.className = 'visuallyhidden';

		oldTabContent.addEventListener('transitionend', function() {		
			oldTabContent.className = 'hidden';
			thisContent.className = 'visible visuallyhidden';
			setTimeout( function() {
				thisContent.classList.remove('visuallyhidden');
			}, 20);
		}, { once: true } );
	}
	
}());





