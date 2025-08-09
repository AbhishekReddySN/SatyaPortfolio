// Scroll navigation highlighting
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        let index = sections.length;
        while (--index && window.scrollY + 80 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        if (sections[index]) {
            const activeId = sections[index].getAttribute('id');
            document.querySelectorAll(`.nav-links a[href="#${activeId}"]`).forEach((el) => {
                el.classList.add('active');
            });
        }
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    // Projects filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const mailtoLink = `mailto:abhishekreddy.satya@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
            window.location.href = mailtoLink;
        });
    }

    // Dynamic year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});