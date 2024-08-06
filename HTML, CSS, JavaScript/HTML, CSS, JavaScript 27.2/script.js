// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка).
//      Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.
function getNewElement() {
    const container = document.getElementById('container')
    const list = container.getElementsByTagName('li')
    if (list.length >= 3) {
        const newList = document.createElement('li')
        newList.textContent = 'Новый элемент'
        container.removeChild(list[list.length - 1])
        container.appendChild(newList)
    }
}
getNewElement();
