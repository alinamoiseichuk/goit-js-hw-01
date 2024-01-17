

// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18.
// Використай у тілі функції інструкцію if для перевірки значення age.

// Оголошена функція checkAge(age)
// Виклик checkAge(20) повертає рядок "You are an adult"
// Виклик checkAge(17) повертає undefined
// Виклик checkAge(10) повертає undefined
// Виклик checkAge(30) повертає рядок "You are an adult"
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function checkAge(age) {
// if (age >= 18) {
// return "You are an adult"}
// }

// console.log(checkAge(20))
// console.log(checkAge(17))

function checkStorage(available, ordered) {
    const available = 200
    const ordered = 50
    if (available <= 200, ordered <= 50) {
    console.log("Order is processed, our manager will contact you") 
    return "Order is processed, our manager will contact you" }
    else { 
        console.log("Not enough goods in stock!")
        return "Not enough goods in stock!"
    }
   }

   console.log(checkStorage(100, 50))