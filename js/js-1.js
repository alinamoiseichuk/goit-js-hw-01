// let nameUser = prompt("Введіть своє ім'я");
// console.log(nameUser);
// let surname = prompt("Введіть своє прізвище");
// console.log(surname);

// alert(`Привіт ${nameUser} ${surname}!`);
// let user = confirm("Саша BOS?")

// let userName = prompt("what is your name?", "M.Jackson?");
// if (userName === null) {
// alert("ok hello guest")
// } else {
// alert(`your name is ${userName}`);
// }


console.log(String(123))
console.log(Boolean(123))
console.log(Number("15"))
console.log(10%3)
console.log(14%2)
console.log(15/5)
console.log(2+3+"5")
console.log(345/"5")
console.log(+true)
console.log(+"")
console.log(+"1" + +"3")


// let counter = 3;
// let a = ++counter;
// console.log(a)


console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log("  -9  " + 5)
console.log("  -9  " - 5)
console.log(null + 1)
console.log(undefined + 1)
console.log(" \t \n" - 2)


console.log(2<1)
console.log(2!=1)
console.log(2===3)


console.log(5 > 4)
console.log("ананас" > "яблуко")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")


// let javaName = prompt("Яка “офіційна” назва JavaScript?");
// if (javaName == "ECMAScript") {
// alert("Правильно!");
// } else {
//     alert("Ви не знаєте? ECMAScript!")
// }


// let value = prompt('Введіть число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }



console.log(null || 2 || undefined) 
// alert( alert(1) || 2 || alert(3) );
console.log(1 && null && 2)
// alert( alert(1) && alert(2) );
console.log( null || 2 && 3 || 4)


// let login = prompt("Who's there?")
// if( login == "Admin") {
//  let password = prompt("Password") 
//         if (password == "TheMaster") {
//             alert("Welcome!")
//         } else if (password == null || password == "") {
//             alert("Canceled")
//         } else {
//             alert("Wrong password")
//         }
    
// } else if ( login == null || login == "") {
//     alert("Canceled")
// } else {
//     alert("I don't know you")
// }

// let i = 0;
// while (i < 3) { // показується 0, далі 1, потім 2
//   alert( i );
//   i++;
// }

// let sum = 0;
// while (true) {
//   let value = +prompt("Введіть число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сума: ' + sum );


// for (let i = 0; i < 10; i++) {
//     // якщо умова справджується, тоді пропускаємо решту тіла циклу і починаємо з наступної ітерації
//     if (i % 2 == 0) continue;
//     alert(i); // 1, потім 3, 5, 7, 9
//   }


// let i = 3;
// while (i) {
//   alert( i-- );
// }

// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 2; i <= 10; i++) {
// if (i % 2 == 0)
// alert(i)
// }

// for (let i = 0; i < 3; i++) {
//     alert( `число ${i}!` );
//   }

// let i = 0;
// while (i++ < 3) {
//     alert(`число ${i}!`)
// } 

// let i = 0;
// while (i < 3) {
//     alert(`число ${i}!`)
//     i++
// } 

let num;
do {
  num = prompt("Введене число, більше за 100?", 0);
} while (num <= 100 && num);
alert(num)
