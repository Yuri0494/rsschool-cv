console.log("1.Верстка валидная +10; \n2.Вёрстка семантическая +8; \n3.Используются заголовки h1-h6 +10; \n4.Для оформления СV используются css-стили +10; \n5.Контент размещается в блоке, который горизонтально центрируется на странице +10; \n6.На странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt +10; \n7.Контакты для связи и перечень навыков оформлены в виде списка ul > li +10; \n8.CV содержит контакты для связи, краткую информацию о себе, перечень навыков, пример кода (или пример html-разметки, или ссылку на выполненный проект), информацию об образовании и уровне английского +10; \n9.CV выполнено на английском языке +10; \n10.выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 \n Итог: 98 баллов");

const menuButton = document.querySelector(".burger__button");
const menu = document.querySelector(".navigation");
const buttonToHeader = document.querySelector(".button__toHeader");

menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
})

menu.addEventListener("click", (event) => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
})

window.addEventListener("scroll", (event) => {
    if(pageYOffset > 200) {
        buttonToHeader.classList.add("active");
    } else {
        buttonToHeader.classList.remove("active");
    }
})