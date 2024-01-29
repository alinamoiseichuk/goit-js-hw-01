// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, 
// які описують продукти в замовленні клієнта. Доповни код функції таким чином,
//  щоб вона повертала число, що дорівнює кількості елементів масиву.

//     Оголошена функція getOrderQuantity(order)
//     Виклик getOrderQuantity(["apple", "peach", "pear", "banana"]) повертає 4
//     Виклик getOrderQuantity(["apple", "banana"]) повертає 2
//     Виклик getOrderQuantity(["apple", "banana", "pear"]) повертає 3
//     Виклик getOrderQuantity([]) повертає 0

    // function getOrderQuantity(order) {
    //     return order.length
    //   }

    //   console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]))
    //   console.log(getOrderQuantity(["apple", "banana"]))
    //   console.log(getOrderQuantity(["apple", "banana", "pear"]))

    // Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. 
    // Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

    // перший елемент - це індекс останнього елементу у масиві array
    // другий елемент - це значення останнього елементу у масиві array

    // Оголошена функція getLastElementMeta(array)
    // Виклик getLastElementMeta(["apple", "peach", "pear", "banana"]) повертає [3, "banana"]
    // Виклик getLastElementMeta(["apple", "peach", "pear"]) повертає [2, "pear"]
    // Виклик getLastElementMeta(["apple", "peach"]) повертає [1, "peach"]
    // Виклик getLastElementMeta(["apple"]) повертає [0, "apple"]

//     function getLastElementMeta(array) {
//     const lastIndex = array.length -1;
//    const lastElement = array[lastIndex]
//    return [lastIndex, lastElement]
//     }
    

//     console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))
//     console.log(getLastElementMeta(["apple", "peach", "pear"]))
//     console.log(getLastElementMeta(["apple", "peach"]) )
//     console.log(getLastElementMeta(["apple"]) )


//     const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"





// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. 
// Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

//     Оголошена функція getExtremeElements(array)
//     Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
//     Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
//     Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]



// function getExtremeElements(array) {
//     return `[${array.slice(0, 1)}, ${array.slice(-1)}]`
// }

//     console.log(getExtremeElements([1, 2, 3, 4, 5]))
//     console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
//     console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))







// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]


// const array= [false];
// const result = array ? "A" : "B";
// console.log(result)




// Функція getLength(array) очікує один параметр array - масив довільних значень. 
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

//     Оголошена функція getLength(array)
//     Виклик getLength(["Mango", "hurries", "to", "the", "train"]) повертає 22
//     Виклик getLength(["M", "a", "n", "g", "o"]) повертає 5
//     Виклик getLength(["top", "picks", "for", "you"]) повертає 14

//     function getLength(array) {
//         const result = array.join("")
//         return result.length
//     }

//     getLength(["Mango", "hurries", "to", "the", "train"])
//     console.log(getLength(["Mango", "hurries", "to", "the", "train"]))
//     console.log(getLength(["M", "a", "n", "g", "o"]))
//     console.log(getLength(["top", "picks", "for", "you"]))

//     const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]
    


// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, 
// що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, 
// що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

//     Оголошена функція calculateEngravingPrice(message, pricePerWord)
//     Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
//     Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
//     Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
//     Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80


    // function calculateEngravingPrice(message, pricePerWord) {
    // const words = message.split(" ")
    // return words.length * pricePerWord
    // }    

    // console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
    // console.log(calculateEngravingPrice("JavaScript is in my blood", 20))
    // console.log(calculateEngravingPrice("Web-development is creative work", 40))
    // console.log(calculateEngravingPrice("Web-development is creative work", 20))


// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']


// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

//     firstTwoEls - масив із перших двох елементів
//     nonExtremeEls - масив з усіх елементів, крім першого та останнього
//     lastThreeEls - масив із трьох останніх елементів

//     Оголошена змінна fruits
//     Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
//     Оголошена змінна firstTwoEls
//     Значення змінної firstTwoEls - це масив ["apple", "plum"]
//     Оголошена змінна nonExtremeEls
//     Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
//     Оголошена змінна lastThreeEls
//     Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1, length -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається 
// з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.

//     Оголошена змінна oldClients
//     Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
//     Оголошена змінна newClients
//     Значення змінної newClients - це масив ["Peach", "Houston"]
//     Оголошена змінна allClients
//     Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
//     Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(allClients)


// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

//     порожній масив, якщо в array немає елемента зі значенням value
//     підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

//     Оголошена функція getSlice(array, value)
//     Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
//     Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
//     Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
//     Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
//     Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []

//     function getSlice(array, value) {
//        const result = array.indexOf(value)
//        if (result === -1) {
//         return []
//        } else {
//         return array.slice(0, result +1)
//        }

//     }

//    console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))
//    console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"))
//    console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))
//    console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"))
//    console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"))

// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]




// const tags = [];
// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// Функція createArrayOfNumbers(min, max) приймає два параметра:

//     min - ціле число, з якого починаються обчислення
//     max - ціле число, до якого включно триватимуть обчислення

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб 
// вона повертала масив усіх цілих чисел від значення min до max включно.

//     Оголошена функція createArrayOfNumbers(min, max)
//     Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
//     Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
//     Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
//     Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
//     В циклі for використовувався метод push


// function createArrayOfNumbers(min, max) {
//   const tags = []
// for (let i = min; i < max; i+=1) {
//    tags.push(i)
// } return tags.push(i)
//     }


// console.log(createArrayOfNumbers(1, 3))





// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }


// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, 
// щоб вона повертала загальну суму елементів з масиву order.

//     Оголошена функція calculateTotalPrice(order)
//     Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
//     Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
//     Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
//     Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

    // function calculateTotalPrice(order) {
    // let total = 0;
    // for ( const i of order) {
    //     total += i;
    // }
    //     return total
    // }

    // function calculateTotalPrice(order) {
    //     let total = 0;
    //     for(let i = 0; i < order.length; i += 1) {
    //         total += order[i]
    //     }
    //     return total
    // }



    // console.log(calculateTotalPrice([12, 85, 37, 4]))
    // console.log(calculateTotalPrice([164, 48, 291]))
    // console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

    // Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. 
    // Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. 
    // Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, 
    // яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

    // Оголошена функція getEvenNumbers(start, end)
    // Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
    // Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
    // Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
    // Виклик функції getEvenNumbers(8, 8) повертає [8]
    // Виклик функції getEvenNumbers(7, 7) повертає []
    // Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

    // function getEvenNumbers(start, end) {
    //     let total = [];
    //     for(let i = start; i < end; i+=2) {
    //         if (i % 2 === 0)
    //     } return total.push(i)
    // }

    // console.log(getEvenNumbers(2, 5))




//     Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). 
//     Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

//     Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
//     В іншому випадку функція повинна повернути весь новий масив.


// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// Залиш цей код для перевірки ментором.


// На що буде звертати увагу ментор при перевірці:


//     Оголошена функція makeArray(firstArray, secondArray, maxLength)
//     Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
//     Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
//     Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
//     Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
//     Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
//     Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
//     Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив


// function  makeArray(firstArray, secondArray, maxLength) {
//     let newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//       return newArray.slice(0, maxLength)
//     } else {
//         return newArray
//     }
// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті.
//  У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// Залиш цей код для перевірки ментором.


// На що буде звертати увагу ментор при перевірці:


//     Оголошена функція slugify(title)
//     Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
//     Виклик slugify("English for developer") повертає "english-for-developer"
//     Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
//     Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"


function slugify(title) {
    let firstStep = title.toLowerCase();
    let secondStep = firstStep.split(" ");
    let result = secondStep.join("-")
    return result
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }



// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false



// Функція checkStorage(storage, item) приймає два параметри:

//     storage - масив рядків, що описує доступні товари на складі
//     item - рядок з назвою товара, наявність якого потрібно перевірити

// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

//     рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
//     рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві

// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "
// pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

//     Оголошена функція checkStorage(storage, item)
//     Виклик checkStorage(["apple", "plum", "pear"], "plum") повертає "plum is available to order!"
//     Виклик checkStorage(["apple", "plum", "pear"], "pLuM") повертає "plum is available to order!"
//     Виклик checkStorage(["apple", "plum", "pear"], "pear") повертає "pear is available to order!"
//     Виклик checkStorage(["apple", "plum", "pear"], "pEAr") повертає "pear is available to order!"
//     Виклик checkStorage(["apple", "plum", "pear"], "orange") повертає "Sorry! We are out of stock!"
//     Виклик checkStorage(["apple", "plum", "pear"], "carrot") повертає "Sorry! We are out of stock!"
    
    function checkStorage(storage, item) {
        if(storage.includes(item.toLowerCase())) {
            return `${item.toLowerCase()} available to order!`
        } else {
            return "Sorry! We are out of stock!"
        }
    }

    console.log(checkStorage(["apple", "plum", "pear"], "plum"))
    console.log(checkStorage(["apple", "plum", "pear"], "pLuM"))
    console.log(checkStorage(["apple", "plum", "pear"], "pear"))
    console.log(checkStorage(["apple", "plum", "pear"], "pEAr"))
    console.log(checkStorage(["apple", "plum", "pear"], "orange"))
    console.log(checkStorage(["apple", "plum", "pear"], "carrot"))



    // Доповни код функції:

    // Створи порожній масив для зберігання нового масиву.
    // Використай цикл for для ітерації кожного елемента у array1.
    // У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
    // Якщо він існує, то додай елемент до нового масиву.
    // Поверни наповнений масив спільних елементів як результат роботи функції.

    // Оголошена функція getCommonElements(array1, array2)
    // Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
    // Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
    // Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
    // Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
    // Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
    // Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив


    // function getCommonElements(array1, array2) {
    //    let newArray = [];
    //    for (let i = 0; i < array1.length; i += 1) {
    //      if (array2.includes(array1[i])) {
    //         newArray.push(array1[i])
    //      }
    //    }
    //     return newArray 
    // }

    // console.log(getCommonElements([1, 2, 3], [2, 4]))
    // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
    // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
    // console.log( getCommonElements([1, 2, 3], [10, 20, 30]))



const planets = ["Earth", "Mars", "Venus"];
for (const planet of planets) {
  console.log(planet);
}



// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
//  Використай цикл for...of для перебору масиву.

//     Оголошена функція calculateTotalPrice(order)
//     Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
//     Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
//     Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
//     Виклик функції calculateTotalPrice([]) повертає 0
//     Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

    function calculateTotalPrice(order) {
        let total = 0
        for (let number of order) {
          total += number  
        }
        return total
    }

    // console.log(calculateTotalPrice([12, 85, 37, 4]))
    // console.log(calculateTotalPrice([164, 48, 291]))
    // console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

    // Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. 
    // Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.


    // Усередині функції:
    
    //     Створи порожній масив, у який будеш додавати підходящі числа.
    //     Використай цикл для ітерації кожного елемента масиву numbers.
    //     Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
    //     Поверни свій новий масив з підходящими числами як результат.
    
    
    // Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
    // У консоль будуть виведені результати її роботи.
    


   function filterArray(numbers, value) {
     let newArray = [];
     for (let i of numbers)
     if (i > value) {
        newArray.push(i)
     }
     return newArray
    }

    console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
    console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
    console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
    console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
    console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
