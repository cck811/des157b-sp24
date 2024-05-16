// noUiSlider
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');

noUiSlider.create(slider1, {
    start: [0],
    range: {
        'min': [0],
        'max': [255]
    }
});

noUiSlider.create(slider2, {
    start: [0],
    range: {
        'min': [0],
        'max': [255]
    }
});

noUiSlider.create(slider3, {
    start: [0],
    range: {
        'min': [0],
        'max': [255]
    }
});

// Anime.js
anime({
    targets: '#ball',
    translateY: [
        { value: -200, duration: 1000 },
        { value: 0, duration: 1000 }
    ],
    translateX: [
        { value: -125, duration: 0},

    ],
    loop: true,
    easing: 'easeInOutSine'
});

function updateBallColor() {
    const r = Math.round(slider1.noUiSlider.get());
    const g = Math.round(slider2.noUiSlider.get());
    const b = Math.round(slider3.noUiSlider.get());
    const color = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('ball').style.backgroundColor = color;
}

slider1.noUiSlider.on('update', updateBallColor);
slider2.noUiSlider.on('update', updateBallColor);
slider3.noUiSlider.on('update', updateBallColor);
