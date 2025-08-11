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
