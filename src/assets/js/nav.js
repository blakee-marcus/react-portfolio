const nav = document.querySelector('.navigation');
const navToggle = document. querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    const visible = nav.getAttribute('data-visible');

    if (visible === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visible === 'true') {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

export default navScript;