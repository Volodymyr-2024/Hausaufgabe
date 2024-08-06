// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem,
//  используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.
const arr = [
    {name: 'apple', price: 40},
    {name: 'banane', price: 55},
    {name: 'pear', price: 35},
]
function hasExpensiveItem(array) {
    const result = array.some(item => item.price > 50)
    return result
}
console.log(hasExpensiveItem(arr))