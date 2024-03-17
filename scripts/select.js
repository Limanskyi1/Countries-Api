// Кастомный селект
export let select =  () => {
    let selectHeader = document.querySelector('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
        select = this.closest('.select');
        let currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }

    selectHeader.addEventListener('click', selectToggle);
    selectItem.forEach(item => item.addEventListener('click', selectChoose));
};


