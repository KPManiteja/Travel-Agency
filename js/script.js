// Masonry Grid + Load More Functionality
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.destination-grid');
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (!grid) return;

    // Initial images data (can be fetched from API later)
    const moreDestinations = [
        {
            img: 'https://source.unsplash.com/600x800/?iceland,aurora',
            alt: 'Iceland Aurora',
            category: 'nature',
            title: 'Northern Lights',
            desc: 'Dancing colors in Arctic skies',
            price: 'From ₹82,999'
        },
        {
            img: 'https://source.unsplash.com/500x500/?rome,colosseum',
            alt: 'Rome',
            category: 'europe',
            title: 'Rome',
            desc: 'Ancient ruins & gelato',
            price: 'From ₹37,999'
        },
        {
            img: 'https://source.unsplash.com/700x400/?sydney,opera+house',
            alt: 'Sydney',
            category: 'urban',
            title: 'Sydney',
            desc: 'Harbor views & beaches',
            price: 'From ₹68,999'
        }
    ];

    // Load More Function
    loadMoreBtn?.addEventListener('click', function() {
        moreDestinations.forEach(dest => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.dataset.category = dest.category;
            card.innerHTML = `
                <img src="${dest.img}" alt="${dest.alt}" class="img-fluid">
                <div class="overlay">
                    <h3>${dest.title}</h3>
                    <p class="mb-2">${dest.desc}</p>
                    <button class="btn btn-sm" style="background-color: #5c899d; color: white;">${dest.price}</button>
                </div>
            `;
            grid.appendChild(card);
        });
        
        // Hide button if no more items
        loadMoreBtn.style.display = 'none';
    });

    // Optional: Filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.filter;
            const cards = document.querySelectorAll('.destination-card');
            
            cards.forEach(card => {
                card.style.display = (category === 'all' || card.dataset.category === category) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
});

// Team Carousel Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize team carousel
    const teamCarousel = new bootstrap.Carousel('#teamCarousel', {
        interval: 5000, // 5 seconds
        wrap: true,
        touch: true
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});