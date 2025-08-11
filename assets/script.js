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
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            form.reset();
        });
    }
    // Fullscreen code block feature
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
        codeBlock.addEventListener('click', function(e) {
            // Create modal overlay
            const overlay = document.createElement('div');
            overlay.className = 'code-modal-overlay';
            // Modal container
            const modal = document.createElement('div');
            modal.className = 'code-modal';
            // Clone code block
            const codeClone = codeBlock.cloneNode(true);
            modal.appendChild(codeClone);
            // Close button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'code-modal-close';
            closeBtn.innerHTML = '&times;';
            closeBtn.onclick = function(ev) {
                document.body.removeChild(overlay);
                document.body.style.overflow = '';
                ev.stopPropagation();
            };
            modal.appendChild(closeBtn);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            // Close on overlay click (not modal)
            overlay.addEventListener('click', function(ev) {
                if (ev.target === overlay) {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                }
            });
            // Close on ESC
            function escListener(ev) {
                if (ev.key === 'Escape') {
                    if (document.body.contains(overlay)) {
                        document.body.removeChild(overlay);
                        document.body.style.overflow = '';
                    }
                    document.removeEventListener('keydown', escListener);
                }
            }
            document.addEventListener('keydown', escListener);
        });
    });
});
