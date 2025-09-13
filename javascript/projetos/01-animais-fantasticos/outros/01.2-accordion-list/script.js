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
