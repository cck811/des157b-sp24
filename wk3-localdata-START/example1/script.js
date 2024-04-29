async function getData(){
    const myMoods = await fetch('data/mood.json');
    const data = await myMoods.json();
    // console.log(data);
    document.querySelector('#moods').innerHTML = outputHTML4(data);
}

// function outputHTML1(data){
//     let html = '<p>';
//     html += `at 10:15 I was feeling ${data['10:15']}`;
//     html += '</p>';
//     return html;
// }



// function outputHTML2(data){
//     const feeling = ['really bad', 'grumpy', 'meh', 'ok', 'good!', 'wicked awesome!'];
//     let html = '<p>';
//     html += `at 10:15 I was feeling ${feeling[ data['10:15'] ]}`;
//     html += '</p>';
//     return html;
// }

// function outputHTML3(data){
//     let html = '';
//     for( let key in data){
//         html += '<p>';
//         html += `At ${key} I was feeling ${data[key]}`;
//         html += '</p>';
//     }
//     return html;
// }

function outputHTML4(data){
    const feeling = ['really bad', 'grumpy', 'meh', 'ok', 'good!', 'wicked awesome!'];
    let html = '';
    for( let key in data){
        html += '<p>';

        html += `At ${key} I was feeling ${feeling[ data[key] ]}`;
        html += '</p>';
    }
    return html;
}


getData();