function multiply() {
    let total = 1;
  
    for (const arg of arguments) {
      total *= arg;
    }
  
    return total;
  }
  
  console.log(multiply(1, 2, 3)); //  6
  console.log(multiply(1, 2, 3, 4)); //  24
  console.log(multiply(1, 2, 3, 4, 5)); //  120



  function foo() {
    // У змінній args буде повноцінний масив з усіх аргументів
    const args = Array.from(arguments);
      return args.join("-");
  }
  
  console.log(foo(1, 2, 3)); // Поверне "1-2-3"

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)

//   Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб 
//   вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику 
//   createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), 
//   який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

//     Оголошена функція createReversedArray()
//     Виклик функції createReversedArray(12, 85, 37, 4) повертає [4, 37, 85, 12]
//     Виклик функції createReversedArray(164, 48, 291) повертає [291, 48, 164]
//     Виклик функції createReversedArray(412, 371, 94, 63, 176) повертає [176, 63, 94, 371, 412]
//     Виклик функції createReversedArray() повертає []


    function createReversedArray() {
        let arrayNew = Array.from(arguments);
        return arrayNew.reverse()
    }
  
    console.log(createReversedArray(12, 85, 37, 4)) 
    console.log(createReversedArray(164, 48, 291))
    console.log(createReversedArray(412, 371, 94, 63, 176))


    function greet(username = "Guest") {
        console.log(`Hello, ${username}!`);
      }
      
      console.log(greet("Jacob")); // "Hello, Jacob!"
      console.log(greet());        // "Hello, Guest!"


function count(from, to, step = 1) {
console.log(`from: ${from}, to: ${to}, step: ${step}`);
      
for (let i = from; i <= to; i += step) {
// ... 
}
}
count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15); // "from: 1, to: 15, step: 1"


// Функція calculateTax(amount, taxRate) оголошує два параметри:

//     amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
//     taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.

// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

//     Оголошена функція calculateTax(amount, taxRate)
//     Виклик функції calculateTax(100, 0.1) повертає 10
//     Виклик функції calculateTax(200, 0.1) повертає 20
//     Виклик функції calculateTax(100, 0.2) повертає 20
//     Виклик функції calculateTax(200, 0.2) повертає 40
//     Виклик функції calculateTax(100, 0.3) повертає 30
//     Виклик функції calculateTax(200, 0.3) повертає 60
//     Виклик функції calculateTax(100) повертає 20
//     Виклик функції calculateTax(200) повертає 40

    function calculateTax(amount, taxRate = 0.2) {
        return amount * taxRate
    }

    console.log(calculateTax(100, 0.1))
    console.log(calculateTax(200, 0.1))
    console.log(calculateTax(100, 0.2))
    console.log(calculateTax(200, 0.2))
    console.log(calculateTax(100, 0.3))
    console.log(calculateTax(200, 0.3))
    console.log(calculateTax(100))
    console.log(calculateTax(200))
