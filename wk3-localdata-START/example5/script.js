(function(){
    'use strict';

    async function getData(){
        const watched = await fetch('data/watched.json');
        const data = await watched.json();
        const values = Object.values(data);
        console.log(values);
        document.querySelector('#movies').innerHTML = outputMovieList(values);
        document.querySelector('#tv').innerHTML = outputTvList(values);
    
        const links = document.querySelectorAll('aside ol li a');
        links.forEach(function(eachLink){
            eachLink.addEventListener('click', function(event){
                event.preventDefault();
                const imdbNumber = event.target.getAttribute('href');
                getTitleInfo(imdbNumber);
            } );
        });  
    }
    
    function outputMovieList(data){
        let movies = '';
        data.forEach( function(eachEntry){
            if(eachEntry.type == 'movie'){
                movies += `<li><a href="${eachEntry.imdb_number}">`;
                movies += eachEntry.title;
                movies += '</a></li>';
            };
        } );
        return movies;
    }
    
    function outputTvList(data){
        let tv = '';
        data.forEach( function(eachEntry){
            if(eachEntry.type == 'television'){
                tv += `<li><a href="${eachEntry.imdb_number}">`;
                tv += `${eachEntry.title.show_title} ${eachEntry.title.episode} ${eachEntry.title.episode_title}`;
                tv += '</a></li>';
            }
        } );
        return tv;
    } 
    
    getData();
    
    async function getTitleInfo(title){
        const url = `http://www.omdbapi.com/?i=${title}&plot=full&apikey=b6a9b242`;
        const titleData = await fetch(url);
        const data = await titleData.json();
        console.log(data);
        document.querySelector("#omdb").innerHTML = outputHTML(data);
    }
    
    function outputHTML(data){
        let html = '';
        if(data.Poster != 'N/A'){
            html += `<img src="${data.Poster}">`;
        }
        html += `<h2>${data.Title}</h2>`;
        html += `<p>Released: ${data.Released} Season: ${data.Season} Episode: ${data.Episode}</p>`;
        html += `<p>Actors: ${data.Actors}</p>`;
        html += `<p>${data.Plot}</p>`;
        
        return html;
    }

})(); // end IIFE

