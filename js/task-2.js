function getShippingMessage(country, price, deliveryFee) {
const totalPrice = price + deliveryFee; 
return (`Shipping to ${country} will cost ${totalPrice} credits`)       
}
    
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"




// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст 
// заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть 
// бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

//     Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
//     Якщо в рядку відсутні заборонені слова, функція повертає буль false

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Залиш цей код для перевірки ментором.
// На що буде звертати увагу ментор при перевірці:

//     Оголошена функція checkForSpam(message).
//     Виклик функції checkForSpam("Latest technology news") повертає false
//     Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
//     Виклик функції checkForSpam("Get best sale offers now!") повертає true
//     Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
//     Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
//     Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
//     Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true



//    function checkForSpam(message) {
//   return message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")
//    }

// checkForSpam("Latest technology news")
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:

//     Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
//     Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// Залиш цей код для перевірки ментором.
// На що буде звертати увагу ментор при перевірці:

//     Оголошена функція formatMessage(message, maxLength)
//     Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
//     Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
//     Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
//     Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
//     Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
//     Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"


// function formatMessage(message, maxLength) {
//     let result;
//     if ( message.length > maxLength){
//       result = message.slice(0, maxLength) + '...'; 
//     } else{
//       result = message.slice(0, message.length)
//     }
//     return result;
// }


// formatMessage("Curabitur ligula sapien", 16)
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) 
// і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> 
// і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

//     China — 100 кредитів
//     Chile — 250 кредитів
//     Australia — 170 кредитів
//     Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня 
// у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
// У консоль будуть виведені результати її роботи.

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// Залиш цей код для перевірки ментором.
// На що буде звертати увагу ментор при перевірці:

//     Оголошена функція getShippingCost(country)
//     У тілі функції використана інструкція switch
//     Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
//     Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
//     Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
//     Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
//     Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
//     Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

function getShippingCost(country) {
    let price
    switch (country) {
        case "China": price = 100;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile": price = 250; 
           return `Shipping to ${country} will cost ${price} credits`;     
            break;
        case "Australia": price = 170;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica": price = 120;
            return `Shipping to ${country} will cost ${price} credits`;
            break;        
        default:
            return "Sorry, there is no delivery to your country"
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"