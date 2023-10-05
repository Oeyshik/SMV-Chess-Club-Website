// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0);
})


// Show/hide FAQ answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const icon = faq.querySelector('.faq__icon i');
    const answer = faq.querySelector('.question__answer p');
    
    faq.addEventListener('click', () => {
        // Toggle the 'active' class on the FAQ to show/hide the answer
        faq.classList.toggle('active');
        
        // Toggle the icon class to change the icon
        if (faq.classList.contains('active')) {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    });
});






// Show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.classList.add("menu-open"); // Add a class to show the menu
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
    menu.classList.remove("menu-open"); // Remove the class to hide the menu
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);
