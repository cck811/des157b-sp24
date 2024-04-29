(function(){
    'use strict';

    async function getData(){
        const watched = await fetch('data/watched.json');
        const data = await watched.json();
        const values = Object.values(data);
        console.log(values);
        document.querySelector('#showdata').innerHTML = outputHTML(values);
    }
    
    function outputHTML(data){
        let html = '';
        data.forEach( function(eachEntry){
            html += "<tr>";
            if(eachEntry.type == 'movie'){
                html += '<td colspan="3">';
                html += eachEntry.title;
                html += '</td>';
            } else {
                html += `<td>${eachEntry.title.show_title}</td><td>${eachEntry.title.episode}</td><td>${eachEntry.title.episode_title}</td>`;
            }
            html += `<td>${eachEntry.platform}</td><td>${eachEntry.date_watched}</td>`;
            html += '</tr>';
        } );
        return html;
    } 
    
    getData();

})(); // end IIFE