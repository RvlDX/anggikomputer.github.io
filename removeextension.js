document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        link.href = link.href.replace(/\.html$/, '');
    });
});
