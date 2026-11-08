const button = document.getElementById('myButton');
const list = document.getElementById('myList');
button.addEventListener('click', function() {
    
    if (list.style.display === "none") {
    list.style.display = "block";
        button.textContent = "Скрыть список";
        
    } else {
        list.style.display = "none";
        button.textContent = "Показать список";
    }
});
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1 
};
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // Если элемент еще не виден, ничего не делаем
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});