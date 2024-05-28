(function() {
    'use strict'; // Enables strict mode for more secure JavaScript
    console.log("reading js");

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~noUiSlider setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    const slider3 = document.getElementById('slider3');
    const slider4 = document.getElementById('slider4');

    noUiSlider.create(slider1, {
        start: [15],
        range: {
            'min': [0],
            'max': [30]
        }
    });

    noUiSlider.create(slider2, {
        start: [16],
        range: {
            'min': [2],
            'max': [30]
        }
    });

    noUiSlider.create(slider3, {
        start: [5],
        range: {
            'min': [0],
            'max': [10]
        }
    });

    noUiSlider.create(slider4, {
        start: [50],
        range: {
            'min': [0],
            'max': [100]
        }
    });

    const canvas = document.getElementById('feedback-canvas');
    const ctx = canvas.getContext('2d');

    function getCategory(value, thresholds) {
        if (value < thresholds[0]) return 'Low';
        if (value < thresholds[1]) return 'Moderate';
        return 'High';
    }

    function getWageCategory(value) {
        if (value < 10) return 'Below Poverty Line';
        if (value < 20) return 'Fair';
        return 'Over-inflated';
    }

    function getWelfareCategory(value) {
        if (value < 3) return 'Poor';
        if (value < 7) return 'Fair';
        return 'Good';
    }

    function getForcesCategory(value) {
        if (value < 33) return 'Weak';
        if (value < 66) return 'Moderate';
        return 'Strong';
    }

    function drawImageBasedOnSliders() {
        const taxRate = parseFloat(slider1.noUiSlider.get());
        const minWage = parseFloat(slider2.noUiSlider.get());
        const socialWelfare = parseFloat(slider3.noUiSlider.get());
        const marketForces = parseFloat(slider4.noUiSlider.get());

        const taxCategory = getCategory(taxRate, [10, 20]);
        const wageCategory = getWageCategory(minWage);
        const welfareCategory = getWelfareCategory(socialWelfare);
        const forcesCategory = getForcesCategory(marketForces);

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Determine image based on categories
        let imgSrc = '';

        if (taxCategory === 'High' && wageCategory === 'Over-inflated' && welfareCategory === 'Good' && forcesCategory === 'Strong') {
            imgSrc = '../images/prospering.png';
        } else if (taxCategory === 'High' && wageCategory === 'Below Poverty Line' && welfareCategory === 'Poor' && forcesCategory === 'Strong') {
            imgSrc = '../images/high-disparity.png';
        } else if (taxCategory === 'Moderate' && wageCategory === 'Fair' && welfareCategory === 'Fair' && forcesCategory === 'Moderate') {
            imgSrc = '../images/balanced-growth.png';
        } else if (taxCategory === 'Low' && wageCategory === 'Below Poverty Line' && welfareCategory === 'Poor' && forcesCategory === 'Weak') {
            imgSrc = '../images/economic-struggle.png';
        } else if (taxCategory === 'Moderate' && wageCategory === 'Over-inflated' && welfareCategory === 'Good' && forcesCategory === 'Moderate') {
            imgSrc = '../images/sustainable-development.png';
        } else if (taxCategory === 'High' && wageCategory === 'Fair' && welfareCategory === 'Good' && forcesCategory === 'Moderate') {
            imgSrc = '../images/high-welfare-society.png';
        } else if (taxCategory === 'Low' && wageCategory === 'Fair' && welfareCategory === 'Fair' && forcesCategory === 'Strong') {
            imgSrc = '../images/economic-boom.png';
        } else if (taxCategory === 'Moderate' && wageCategory === 'Fair' && welfareCategory === 'Fair' && forcesCategory === 'Weak') {
            imgSrc = '../images/stagnant-economy.png';
        } else if (taxCategory === 'High' && wageCategory === 'Over-inflated' && welfareCategory === 'Poor' && forcesCategory === 'Strong') {
            imgSrc = '../images/imbalanced-prosperity.png';
        } else if (taxCategory === 'Low' && wageCategory === 'Fair' && welfareCategory === 'Fair' && forcesCategory === 'Moderate') {
            imgSrc = '../images/unstable-economy.png';
        } else {
            imgSrc = '../images/balanced.png';
        }

        const img = new Image();
        img.src = imgSrc;
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }

    function translateSocialWelfare(value) {
        if (value >= 8) {
            return "Good";
        } else if (value >= 4) {
            return "Fair";
        } else if (value >= 1) {
            return "Poor";
        } else {
            return "None";
        }
    }

    function translateMarketForces(value) {
        if (value >= 66) {
            return "Strong";
        } else if (value >= 33) {
            return "Moderate";
        } else {
            return "Weak";
        }
    }

    function updateFeedback() {
        const taxRate = slider1.noUiSlider.get();
        const minWage = slider2.noUiSlider.get();
        const socialWelfareValue = slider3.noUiSlider.get();
        const marketForcesValue = slider4.noUiSlider.get();
        const socialWelfare = translateSocialWelfare(socialWelfareValue);
        const marketForces = translateMarketForces(marketForcesValue);
        const feedback = `Tax Rate: ${taxRate}% | Minimum Wage: $${minWage}/hr | Social Welfare: ${socialWelfare} | Market Forces: ${marketForces}`;
        document.getElementById('feedback-chart').textContent = feedback;
        drawImageBasedOnSliders(); // Call drawImageBasedOnSliders here
    }

    slider1.noUiSlider.on('update', updateFeedback);
    slider2.noUiSlider.on('update', updateFeedback);
    slider3.noUiSlider.on('update', updateFeedback);
    slider4.noUiSlider.on('update', updateFeedback);

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to show instruction overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    document.addEventListener('DOMContentLoaded', (event) => { // Event listener upon entering site
        const instructionsOverlay = document.getElementById('instructions-overlay'); // Element of the instruction overlay
        const showInstructionsBtn = document.getElementById('show-instructions'); // Element of ? button
        const closeInstructionsBtn = document.getElementById('close-instructions'); // Element of Close button

        // Hide the overlay when the page loads
        instructionsOverlay.style.display = 'block';

        // Hide overlay when "Close" is clicked
        closeInstructionsBtn.addEventListener('click', function() { 
            instructionsOverlay.style.display = 'none';
        });

        // Toggle overlay visibility when ? button is clicked
        showInstructionsBtn.addEventListener('click', function() {
            if (instructionsOverlay.style.display === 'none') {
                instructionsOverlay.style.display = 'block';
            } else {
                instructionsOverlay.style.display = 'none';
            }
        });
    });

})();
