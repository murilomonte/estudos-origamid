function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');

    if (tabContent.length > 0 && tabMenu.length > 0) {
        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove('ativo');
            });

            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', function () {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length > 0) {
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion(event) {
            let item = event.currentTarget;
            let content = event.currentTarget.nextElementSibling;

            item.classList.toggle('ativo');
            content.classList.toggle('ativo');
        }

        accordionList.forEach((item, index) => {
            item.addEventListener('click', activeAccordion);
        });
    }

}

initAccordion();


function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        // Forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth"
        // });


        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    linksInternos.forEach((item, index) => {
        item.addEventListener('click', scrollToSection)
    });
}

initScroll();

function initAnimScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowSize = window.innerHeight;

    if (sections.length > 0) {
        function animScroll() {
            sections.forEach((item, index) => {
                const sectionTop = item.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - (windowSize * 0.6)) < 0;
                if (isSectionVisible) {
                    console.log('animar');
                    item.classList.add('ativo');
                }
            });
        }

        animScroll();

        window.addEventListener('scroll', animScroll);
    }
}

initAnimScroll();

