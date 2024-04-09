
(function() {
    'use strict'; // Enables strict mode for more secure JavaScript

    const button = document.querySelector('button'); // Selects the button in the document
    const body = document.querySelector('body'); // Selects the body element
    const banner = document.querySelector('#banner'); // Selects the banner element by ID
    const sections = document.querySelectorAll('section'); // Selects all section elements
    let mode = 'dark'; // Variable to keep track of the current theme mode

    button.addEventListener('click', function() {
        if (mode === 'dark') { // Check if the current mode is dark
            // If so, switch to light mode
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) { // Iterates over each section to apply the light mode class
                section.className = 'switch';
            }
            body.style.backgroundPosition = '0 220px, -300px 110px';
            mode = 'light'; // Update the mode to light
        } else {
            // If the mode is light, revert to dark mode
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) { // Remove the light mode class from each section
                section.removeAttribute('class');
            }
            body.style.backgroundPosition = '0 -220px, 300px 110px';
            mode = 'dark'; // Update the mode to dark
        }

    });
/*------------------------------------Dots-----------------------------------------*/
    // Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
    /*-----------------------------------Banner-----------------------------------------*/
document.querySelector('#banner').addEventListener('click', function() {
    this.querySelector('h3').textContent = "Didn't tell you to click this... smh"; // Change the text content on click
});
})();