// Navigation functionality for Free Beer Studio Documentation

document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation item based on current path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-section a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Exact match or index page
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('active');
        }
        // Partial match for section pages
        else if (currentPath.startsWith(href) && href !== '/') {
            link.classList.add('active');
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add copy button to code blocks
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        `;

        pre.style.position = 'relative';
        pre.appendChild(button);

        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });

        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });

        button.addEventListener('click', async () => {
            const code = pre.querySelector('code') || pre;
            await navigator.clipboard.writeText(code.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });

    // Table of contents generator for pages with headers
    const headers = document.querySelectorAll('.content h2, .content h3');
    if (headers.length > 3) {
        const toc = document.createElement('nav');
        toc.className = 'table-of-contents';
        toc.innerHTML = '<h4>On This Page</h4><ul></ul>';

        const tocList = toc.querySelector('ul');
        headers.forEach((header, index) => {
            const id = header.id || `section-${index}`;
            header.id = id;

            const li = document.createElement('li');
            li.className = header.tagName.toLowerCase() === 'h3' ? 'toc-sub' : '';
            li.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
            tocList.appendChild(li);
        });

        const firstSection = document.querySelector('.content .section');
        if (firstSection) {
            firstSection.insertBefore(toc, firstSection.firstChild);
        }
    }
});

// Search functionality (can be enhanced with a search index)
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const navLinks = document.querySelectorAll('.nav-section li');

        navLinks.forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
}

// Initialize search if search input exists
initSearch();
