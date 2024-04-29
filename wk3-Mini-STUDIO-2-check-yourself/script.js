async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        updateDogCountDisplay(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

function updateDogCountDisplay(data) {
    const totalDogs = data.reduce((total, entry) => total + entry.dogs_seen, 0);
    document.getElementById('dogCount').textContent = 'Total Dogs Seen: ' + totalDogs;
    createListItems(data);
}

function createListItems(data) {
    const list = document.getElementById('timeSlots');
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.time;
        listItem.onmouseover = () => {
            document.getElementById('details').textContent = `At ${item.time}, I saw ${item.dogs_seen} dogs walking around Davis.`;
        };
        list.appendChild(listItem);
    });
}

fetchData(); // Load and display data on initial load
