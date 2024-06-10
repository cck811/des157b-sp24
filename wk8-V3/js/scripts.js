(function() {
    'use strict';
    console.log("reading js");
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~script start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Slider setup~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    document.addEventListener('DOMContentLoaded', function() {
        const slider1 = document.getElementById('slider1');
        const slider2 = document.getElementById('slider2');
        const slider3 = document.getElementById('slider3');
        const slider4 = document.getElementById('slider4'); // Added slider for Market Forces
        const explanationDiv = document.getElementById('explanation');
    
        noUiSlider.create(slider1, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        noUiSlider.create(slider2, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        noUiSlider.create(slider3, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        noUiSlider.create(slider4, {
            start: [1],
            range: {
                'min': [1],
                'max': [3]
            },
            step: 1
        });
    
        const canvas = document.getElementById('feedback-canvas');
        const ctx = canvas.getContext('2d');
    
        function drawImageBasedOnSliders() {
            const taxRate = parseInt(slider1.noUiSlider.get());
            const minWage = parseInt(slider2.noUiSlider.get());
            const socialWelfare = parseInt(slider3.noUiSlider.get());
            const marketForces = parseInt(slider4.noUiSlider.get());
    
            
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
            
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Scenarios with all Sliders Values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

            let imgSrc = '';
            let explanation = '';
    
            const scenarios = {
                "economic-boom": [
                    [1, 2, 3, 3], [2, 2, 3, 3], [3, 2, 3, 3],
                    [1, 3, 3, 3], [2, 3, 3, 3], [3, 3, 3, 3]
                ],
                "high-disparity": [
                    [1, 1, 1, 3], [1, 2, 1, 3], [1, 3, 1, 3],
                    [1, 1, 3, 3], [2, 1, 1, 3], [2, 1, 2, 3],
                    [2, 2, 1, 3], [1, 1, 2, 3], [2, 1, 3, 3]
                ],
                "balanced-growth": [
                    [2, 2, 2, 2]
                ],
                "economic-struggle": [
                    [1, 1, 1, 1], [1, 1, 2, 1], [2, 1, 1, 1],
                    [2, 1, 1, 2], [2, 1, 2, 1], [2, 1, 2, 2],
                    [2, 1, 3, 1], [2, 1, 3, 2]
                ],
                "sustainable-development": [
                    [2, 2, 3, 2], [3, 2, 3, 2], [2, 3, 3, 2]
                ],
                "high-welfare-society": [
                    [3, 3, 3, 2], [3, 3, 3, 1], [1, 3, 3, 1], [1, 3, 3, 2]
                ],
                "stagnant-economy": [
                    [2, 2, 2, 1], [3, 2, 2, 1], [3, 2, 2, 2]
                ],
                "welfare-dependent-economy": [
                    [3, 1, 3, 1], [3, 2, 3, 1], [1, 1, 3, 1],
                    [2, 2, 3, 1], [1, 1, 3, 2]
                ],
                "market-led-growth": [
                    [1, 2, 2, 3], [2, 2, 2, 3]
                ],
                "tax-burdened-economy": [
                    [3, 1, 2, 1], [3, 2, 1, 1], [3, 2, 1, 2],
                    [3, 2, 1, 3]
                ],
                "fair-wage-economy": [
                    [1, 2, 2, 1], [1, 2, 2, 2], [1, 2, 3, 1],
                    [1, 2, 3, 2], [2, 2, 1, 1], [2, 2, 1, 2]
                ],
                "inflated-wage-economy": [
                    [1, 3, 2, 1], [1, 3, 2, 2], [2, 3, 2, 1],
                    [2, 3, 2, 2], [2, 3, 3, 1], [1, 3, 2, 3],
                    [2, 3, 2, 3]
                ],
                "under-developed-economy": [
                    [1, 2, 1, 1], [1, 2, 1, 2], [1, 3, 1, 1],
                    [1, 3, 1, 2], [1, 1, 1, 2], [1, 1, 2, 2]
                ],
                "low-growth-economy": [
                    [3, 1, 1, 1], [3, 1, 1, 2], [3, 1, 1, 3],
                    [3, 1, 2, 2], [3, 1, 2, 3], [3, 1, 3, 2],
                    [3, 1, 3, 3], [3, 2, 2, 3]
                ],
                "overburdened-economy": [
                    [3, 3, 1, 1], [3, 3, 1, 2], [3, 3, 1, 3],
                    [3, 3, 2, 1], [3, 3, 2, 2], [3, 3, 2, 3],
                    [2, 3, 1, 1], [2, 3, 1, 2], [2, 3, 1, 3]
                ]
            };
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~explaination section~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            const explanations = {
                "economic-boom": [
                    [1, 2, 3, 3, "Low taxes boost business investment, fair wages ensure decent living standards, good social welfare supports the needy, and strong market forces drive economic growth."],
                    [2, 2, 3, 3, "Moderate taxes balance revenue and investment, fair wages keep consumer spending healthy, good social welfare reduces inequality, and strong market forces sustain growth."],
                    [3, 2, 3, 3, "High taxes fund excellent public services, fair wages support the middle class, good social welfare mitigates poverty, and strong market forces drive innovation and productivity."],
                    [1, 3, 3, 3, "Low taxes encourage business investment, but over-inflated wages could strain employers; good social welfare and strong market forces maintain economic momentum."],
                    [2, 3, 3, 3, "Moderate taxes ensure public funding, over-inflated wages might hurt employment, but good social welfare and strong market forces help sustain economic performance."],
                    [3, 3, 3, 3, "High taxes support public goods, over-inflated wages risk unemployment, but strong market forces and good social welfare drive overall economic strength."]
                ],
                "high-disparity": [
                    [1, 1, 1, 3, "Low taxes favor the wealthy, insufficient wages trap workers in poverty, poor social welfare fails to support the vulnerable, leading to high inequality despite strong markets."],
                    [1, 2, 1, 3, "Low taxes benefit the rich, fair wages provide some relief but poor social welfare increases disparity, even as strong markets thrive."],
                    [1, 3, 1, 3, "Low taxes aid the affluent, over-inflated wages might cause job losses, poor social welfare exacerbates inequality, despite robust market forces."],
                    [1, 1, 3, 3, "Low taxes help the wealthy, inadequate wages cause poverty, good social welfare tries to bridge the gap, but strong markets accentuate disparity."],
                    [2, 1, 1, 3, "Moderate taxes balance public funds, low wages increase poverty, poor social welfare deepens inequality, despite strong markets."],
                    [2, 1, 2, 3, "Moderate taxes fund essential services, low wages perpetuate poverty, fair social welfare offers limited support, with strong markets favoring the wealthy."],
                    [2, 2, 1, 3, "Moderate taxes provide public revenue, fair wages aid workers, poor social welfare leaves many vulnerable, strong markets widen wealth gaps."],
                    [1, 1, 2, 3, "Low taxes benefit the rich, low wages harm workers, fair social welfare offers some support, strong markets increase inequality."],
                    [2, 1, 3, 3, "Moderate taxes ensure public services, low wages cause poverty, good social welfare mitigates some disparity, but strong markets still favor the affluent."]
                ],
                "balanced-growth": [
                    [2, 2, 2, 2, "Moderate taxes and fair wages balance growth and equity, fair social welfare supports the middle class, and moderate market forces ensure steady progress."]
                ],
                "economic-struggle": [
                    [1, 1, 1, 1, "Low taxes limit public funds, low wages cause poverty, poor social welfare fails to support the needy, weak markets stifle growth."],
                    [1, 1, 2, 1, "Low taxes restrict public services, low wages increase poverty, fair social welfare offers limited aid, weak markets hinder development."],
                    [2, 1, 1, 1, "Moderate taxes provide some public funding, low wages perpetuate poverty, poor social welfare leaves many without support, weak markets stall progress."],
                    [2, 1, 1, 2, "Moderate taxes ensure some services, low wages keep workers in poverty, poor social welfare exacerbates hardship, moderate markets offer limited growth."],
                    [2, 1, 2, 1, "Moderate taxes fund essential services, low wages increase poverty, fair social welfare gives minimal support, weak markets restrict opportunities."],
                    [2, 1, 2, 2, "Moderate taxes balance public funding, low wages cause poverty, fair social welfare provides some aid, moderate markets sustain slow growth."],
                    [2, 1, 3, 1, "Moderate taxes support public goods, low wages cause poverty, good social welfare mitigates some issues, weak markets limit overall growth."],
                    [2, 1, 3, 2, "Moderate taxes ensure public services, low wages trap workers in poverty, good social welfare offers relief, moderate markets support limited progress."]
                ],
                "sustainable-development": [
                    [2, 2, 3, 2, "Moderate taxes and fair wages balance equity, good social welfare ensures support, and moderate markets sustain steady, sustainable growth."],
                    [3, 2, 3, 2, "High taxes fund robust public services, fair wages support workers, good social welfare reduces poverty, moderate markets maintain sustainable development."],
                    [2, 3, 3, 2, "Moderate taxes balance revenue, over-inflated wages might hurt some businesses, good social welfare provides support, moderate markets sustain overall stability."]
                ],
                "high-welfare-society": [
                    [3, 3, 3, 2, "High taxes ensure excellent public services, over-inflated wages risk employment, but good social welfare and moderate markets maintain a high quality of life."],
                    [3, 3, 3, 1, "High taxes support strong social welfare, over-inflated wages hurt employment, weak markets hinder growth but welfare ensures a safety net."],
                    [1, 3, 3, 1, "Low taxes encourage investment, over-inflated wages risk unemployment, good social welfare supports the vulnerable, weak markets limit growth."],
                    [1, 3, 3, 2, "Low taxes favor investment, over-inflated wages could hurt jobs, good social welfare provides support, moderate markets ensure some stability."]
                ],
                "stagnant-economy": [
                    [2, 2, 2, 1, "Moderate taxes provide balanced public funding, fair wages help workers, fair social welfare supports the needy, but weak markets limit growth."],
                    [3, 2, 2, 1, "High taxes fund public services, fair wages support workers, fair social welfare aids those in need, but weak markets stifle economic activity."],
                    [3, 2, 2, 2, "High taxes ensure public funding, fair wages help workers, fair social welfare supports the vulnerable, moderate markets offer limited growth."]
                ],
                "welfare-dependent-economy": [
                    [3, 1, 3, 1, "High taxes fund robust social welfare, low wages cause poverty, weak markets limit job opportunities, reliance on welfare increases."],
                    [3, 2, 3, 1, "High taxes support excellent social services, fair wages aid workers, weak markets restrict growth, increasing welfare dependence."],
                    [1, 1, 3, 1, "Low taxes favor the wealthy, low wages trap workers in poverty, good social welfare tries to compensate, weak markets limit opportunities."],
                    [2, 2, 3, 1, "Moderate taxes ensure public services, fair wages support workers, good social welfare aids the needy, weak markets stifle growth."],
                    [1, 1, 3, 2, "Low taxes benefit the rich, low wages perpetuate poverty, good social welfare offers support, moderate markets sustain limited opportunities."]
                ],
                "market-led-growth": [
                    [1, 2, 2, 3, "Low taxes encourage investment, fair wages support consumer spending, fair social welfare reduces inequality, strong markets drive growth."],
                    [2, 2, 2, 3, "Moderate taxes balance public funds and investment, fair wages help workers, fair social welfare supports the vulnerable, strong markets sustain growth."]
                ],
                "tax-burdened-economy": [
                    [3, 1, 2, 1, "High taxes strain businesses, low wages cause poverty, fair social welfare provides limited support, weak markets hinder growth."],
                    [3, 2, 1, 1, "High taxes limit business investment, fair wages help workers, poor social welfare fails to support the needy, weak markets stifle activity."],
                    [3, 2, 1, 2, "High taxes fund public services, fair wages support workers, poor social welfare leaves many vulnerable, moderate markets sustain limited growth."],
                    [3, 2, 1, 3, "High taxes ensure public funding, fair wages help workers, poor social welfare exacerbates inequality, strong markets drive limited economic progress."]
                ],
                "fair-wage-economy": [
                    [1, 2, 2, 1, "Low taxes encourage investment, fair wages support workers, fair social welfare aids the needy, but weak markets limit growth."],
                    [1, 2, 2, 2, "Low taxes favor investment, fair wages support consumer spending, fair social welfare reduces inequality, moderate markets sustain progress."],
                    [1, 2, 3, 1, "Low taxes help businesses, fair wages support workers, good social welfare aids the vulnerable, but weak markets limit opportunities."],
                    [1, 2, 3, 2, "Low taxes boost investment, fair wages support spending, good social welfare reduces poverty, moderate markets sustain growth."],
                    [2, 2, 1, 1, "Moderate taxes balance public funding, fair wages support workers, poor social welfare leaves many without support, weak markets hinder development."],
                    [2, 2, 1, 2, "Moderate taxes ensure public services, fair wages help workers, poor social welfare increases disparity, moderate markets sustain limited progress."]
                ],
                "inflated-wage-economy": [
                    [1, 3, 2, 1, "Low taxes encourage investment, over-inflated wages risk unemployment, fair social welfare supports some, weak markets hinder growth."],
                    [1, 3, 2, 2, "Low taxes favor investment, over-inflated wages strain businesses, fair social welfare aids the needy, moderate markets support some growth."],
                    [2, 3, 2, 1, "Moderate taxes balance public funding, over-inflated wages risk job losses, fair social welfare provides limited support, weak markets hinder development."],
                    [2, 3, 2, 2, "Moderate taxes ensure public services, over-inflated wages hurt businesses, fair social welfare aids some, moderate markets sustain limited growth."],
                    [2, 3, 3, 1, "Moderate taxes fund services, over-inflated wages risk employment, good social welfare supports the vulnerable, weak markets limit opportunities."],
                    [1, 3, 2, 3, "Low taxes encourage investment, over-inflated wages might cause job losses, fair social welfare supports some, strong markets drive growth."],
                    [2, 3, 2, 3, "Moderate taxes balance public funding, over-inflated wages risk unemployment, fair social welfare aids the needy, strong markets sustain progress."]
                ],
                "under-developed-economy": [
                    [1, 2, 1, 1, "Low taxes benefit the wealthy, fair wages help workers, poor social welfare increases disparity, weak markets stifle growth."],
                    [1, 2, 1, 2, "Low taxes favor investment, fair wages support spending, poor social welfare leaves many vulnerable, moderate markets sustain limited development."],
                    [1, 3, 1, 1, "Low taxes encourage investment, over-inflated wages risk unemployment, poor social welfare fails to support the needy, weak markets limit growth."],
                    [1, 3, 1, 2, "Low taxes boost investment, over-inflated wages hurt businesses, poor social welfare exacerbates poverty, moderate markets offer limited progress."],
                    [1, 1, 1, 2, "Low taxes benefit the rich, low wages increase poverty, poor social welfare fails to aid the vulnerable, moderate markets sustain limited development."],
                    [1, 1, 2, 2, "Low taxes favor the wealthy, low wages trap workers in poverty, fair social welfare offers minimal support, moderate markets sustain limited opportunities."]
                ],
                "low-growth-economy": [
                    [3, 1, 1, 1, "High taxes strain businesses, low wages cause poverty, poor social welfare fails to support the needy, weak markets stifle growth."],
                    [3, 1, 1, 2, "High taxes limit business investment, low wages perpetuate poverty, poor social welfare leaves many without support, moderate markets offer limited growth."],
                    [3, 1, 1, 3, "High taxes ensure public funding, low wages cause poverty, poor social welfare increases disparity, strong markets drive limited economic progress."],
                    [3, 1, 2, 2, "High taxes fund public services, low wages trap workers in poverty, fair social welfare provides minimal support, moderate markets sustain limited growth."],
                    [3, 1, 2, 3, "High taxes support public services, low wages increase poverty, fair social welfare offers limited aid, strong markets sustain limited progress."],
                    [3, 1, 3, 2, "High taxes ensure public funding, low wages perpetuate poverty, good social welfare mitigates some disparity, moderate markets sustain limited growth."],
                    [3, 1, 3, 3, "High taxes fund public goods, low wages trap workers in poverty, good social welfare provides relief, strong markets sustain limited progress."],
                    [3, 2, 2, 3, "High taxes ensure public funding, fair wages support workers, fair social welfare aids the needy, strong markets drive growth."]
                ],
                "overburdened-economy": [
                    [3, 3, 1, 1, "High taxes limit business growth, over-inflated wages risk unemployment, poor social welfare leaves many without support, weak markets hinder development."],
                    [3, 3, 1, 2, "High taxes strain businesses, over-inflated wages hurt employment, poor social welfare exacerbates poverty, moderate markets offer limited growth."],
                    [3, 3, 1, 3, "High taxes limit business investment, over-inflated wages risk job losses, poor social welfare fails to support the needy, strong markets drive limited progress."],
                    [3, 3, 2, 1, "High taxes strain businesses, over-inflated wages risk unemployment, fair social welfare provides limited aid, weak markets hinder growth."],
                    [3, 3, 2, 2, "High taxes ensure public services, over-inflated wages hurt businesses, fair social welfare aids some, moderate markets sustain limited growth."],
                    [3, 3, 2, 3, "High taxes support public services, over-inflated wages risk unemployment, fair social welfare offers minimal aid, strong markets drive growth."],
                    [2, 3, 1, 1, "Moderate taxes provide some public funding, over-inflated wages hurt employment, poor social welfare fails to support the needy, weak markets stifle growth."],
                    [2, 3, 1, 2, "Moderate taxes ensure public services, over-inflated wages risk job losses, poor social welfare increases disparity, moderate markets offer limited growth."],
                    [2, 3, 1, 3, "Moderate taxes balance public funding, over-inflated wages hurt businesses, poor social welfare leaves many without support, strong markets sustain limited growth."]
                ]
            };
    
            // Find the matching scenario and explanation
            for (const [scenario, conditions] of Object.entries(scenarios)) {
                for (const condition of conditions) {
                    if (taxRate === condition[0] && minWage === condition[1] && socialWelfare === condition[2] && marketForces === condition[3]) {
                        imgSrc = `../images/${scenario}.svg`;
                        break;
                    }
                }
                if (imgSrc) break;
            }
    
            for (const [scenario, conditions] of Object.entries(explanations)) {
                for (const condition of conditions) {
                    if (taxRate === condition[0] && minWage === condition[1] && socialWelfare === condition[2] && marketForces === condition[3]) {
                        explanation = condition[4];
                        break;
                    }
                }
                if (explanation) break;
            }
    
            const img = new Image();
            img.src = imgSrc;
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
    
            explanationDiv.textContent = explanation;
        }
    
        slider1.noUiSlider.on('update', drawImageBasedOnSliders);
        slider2.noUiSlider.on('update', drawImageBasedOnSliders);
        slider3.noUiSlider.on('update', drawImageBasedOnSliders);
        slider4.noUiSlider.on('update', drawImageBasedOnSliders);
    
        
    });
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to show instruction overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    document.addEventListener('DOMContentLoaded', (event) => { // Event listener upon entering site
        const instructionsOverlay = document.getElementById('instructions-overlay'); // Element of the instruction overlay
        const showInstructionsBtn = document.getElementById('show-instructions'); // Element of ? button
        const closeInstructionsBtn = document.getElementById('close-instructions'); // Element of Close button
    
        // Show the overlay when the page loads
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
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Comment Section~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    // Initialize
    Parse.initialize("OIRMnHSubP72gcTqiOWWksDMceFEx75Gx1oxx9YF", "yVLvstuECWXTgC8Z4k2Ohzn92RZT2HK7mJUjJhF4");
    Parse.serverURL = 'https://parseapi.back4app.com/';

    // Fetch and display comment
    async function fetchComments() {
        const commentsQuery = new Parse.Query('Comments');
        commentsQuery.descending('time');
        const results = await commentsQuery.find();
        const commentsDiv = document.getElementById('comments');
        commentsDiv.innerHTML = '';
        results.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <h4>${comment.get('username')}</h4>
                <p>${comment.get('comment')}</p>
            `;
            commentsDiv.appendChild(commentElement);
        });
    }

    // Submit new comment
    async function submitComment(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;
        const Comment = Parse.Object.extend('Comments');
        const newComment = new Comment();
        newComment.set('username', username);
        newComment.set('comment', comment);
        await newComment.save();
        document.getElementById('comment-form').reset();
        fetchComments();
    }

    document.getElementById('comment-form').addEventListener('submit', submitComment);

    // Get comments on page load
    fetchComments();


})();
