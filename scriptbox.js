const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-btn');


    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true'

        //default collapsed items
        accordionItems.forEach(i => {
            i.querySelector('.accordion-btn') .setAttribute('aria-expanded', 'false');
        });

        //Expand when clicked
        if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
        }    
    })
})

//