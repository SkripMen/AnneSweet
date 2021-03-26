const buttMore = document.getElementById("port-butt-id");
const buttMore1 = document.getElementById("post-butt-id");
const ninja = document.getElementById("ninja");
const ninja1 = document.getElementById("ninja1");

buttMore.addEventListener("click", function () {
    if (ninja.style.display == 'grid') {
        ninja.style.display = 'none';
        buttMore.innerText = 'Показать ещё'
    } else {
        ninja.style.display = 'grid';
        buttMore.innerText = 'Скрыть'
    }
});
buttMore1.addEventListener("click", function () {
    if (ninja1.style.display == 'grid') {
        ninja1.style.display = 'none';
        buttMore1.innerText = 'Показать ещё'
    } else {
        ninja1.style.display = 'grid';
        buttMore1.innerText = 'Скрыть'
    }
});