document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.createElement('button');
    toggleThemeBtn.textContent = 'Switch Theme';
    document.body.appendChild(toggleThemeBtn);
    
    toggleThemeBtn.addEventListener('click', function() {
        document.body.classList.toggle('switch');
    });
});
