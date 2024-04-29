let globalData;
async function getData(){
    const myMoods = await fetch('data/mood2.json');
    const data = await myMoods.json();
    //console.log(data);
    globalData = data;
    document.querySelector('#moods').innerHTML = outputHTML1(data);
    document.querySelector('#picker').innerHTML = createSelectList(data);
}


function outputHTML1(data){
    const feeling = ['really bad', 'grumpy', 'meh', 'ok', 'good!', 'wicked awesome!'];
    let html = '<p>';
    html += `at ${data.point2.time} I was feeling ${feeling[ data.point2.mood ]} because of ${data.point2.reason}`; 
    html += '</p>';
    return html;
}

function createSelectList(data){
    let html = '<option>---</option>';
    const dataPoints = Object.keys(data);
    console.log(dataPoints);
    dataPoints.forEach( function(eachPoint){
        html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`;
    } );
    return html;
}

document.querySelector('#picker').addEventListener('change', function(){
    const newValue = this.value;
    updateInterface(newValue, globalData);
});

function updateInterface(value, jsonData){
    const feeling = ['really bad', 'grumpy', 'meh', 'ok', 'good!', 'wicked awesome!'];
    let html = '<p>';
    html += `at ${jsonData[value].time} I was feeling ${feeling[ jsonData[value].mood ]} because of: ${jsonData[value].reason}`;
    html += '</p>';
    document.querySelector('#result').innerHTML = html;
}

getData();
