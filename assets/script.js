// Animated nav shrink on scroll, show symbol only
window.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    // Add symbol element if not present
    if (!nav.querySelector('.nav-symbol')) {
        const symbol = document.createElement('div');
        symbol.className = 'nav-symbol';
        symbol.innerText = '≡';
        nav.appendChild(symbol);
    }
    const navSymbol = nav.querySelector('.nav-symbol');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            nav.classList.add('shrink');
        } else {
            nav.classList.remove('shrink');
        }
    });
    // Optional: clicking the symbol scrolls to top
    navSymbol.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Extensionless navigation for .html links using a JSON mapping
    const urlMap = {
        'about.html': 'about',
        'projects.html': 'projects',
        'index.html': ''
    };
    document.querySelectorAll('a[href$=".html"]').forEach(function(link) {
        const href = link.getAttribute('href');
        if (urlMap[href] !== undefined) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Try to go to extensionless path, fallback to .html if 404
                const target = window.location.origin + '/' + urlMap[href];
                fetch(target, { method: 'HEAD' }).then(function(resp) {
                    if (resp.ok) {
                        window.location.assign(target);
                    } else {
                        window.location.assign(href);
                    }
                }).catch(function() {
                    window.location.assign(href);
                });
            });
        }
    });
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            form.reset();
        });
    }
    // Fullscreen code block feature
    // Fullscreen code block feature removed as requested.
});
