function searchCars() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        
        if (title.includes(searchInput) && searchInput !== '') {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight');
        }
    });
}
