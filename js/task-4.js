

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

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     // if (password === correctPassword) {
//     //   return "Access granted"
//     // } else {
//     //    return "Access denied, wrong password!"
//     // }
//     return password === correctPassword ? "Access granted!" : "Access denied, wrong password!"
//   }

//   console.log(checkPassword("jqueryismyjam"))
//   console.log(checkPassword("angul4r1sl1f3"))
   


// function getSubscriptionPrice(type) {
//     switch (type) {
//       case "starter":
//       return 0;
//         break;
//         case "professional":
//             return 20
//             break;
//           case "organization":
//             return 50
//             break;
//           default:
//             return "Invalid subscription type!"
      
//     }
//   }

//   console.log(getSubscriptionPrice("starter"))
//   console.log(getSubscriptionPrice("professional"))
//   console.log(getSubscriptionPrice("organization"))
//   console.log(getSubscriptionPrice("premium"))

// console.log(5 && "und");
// console.log( 0 && 5)

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. 
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//     number - число, входження якого перевіряється
//     start - початок числового проміжку
//     end - кінець числового проміжку

// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, 
// щоб вона повертала результат входження number у числовий проміжок від start до end включно. 
// Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. 
// Результатом виклику функції має бути буль true або false.

//     Оголошена функція isNumberInRange(start, end, number)
//     Використано оператор &&
//     Виклик isNumberInRange(10, 30, 17) повертає true
//     Виклик isNumberInRange(10, 30, 5) повертає false
//     Виклик isNumberInRange(20, 50, 24) повертає true
//     Виклик isNumberInRange(20, 50, 76) повертає false


// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end
//   }

//   console.log(isNumberInRange(10, 30, 17))
//   console.log(isNumberInRange(10, 30, 5)) 
//   console.log(isNumberInRange(20, 50, 24))
//  console.log(isNumberInRange(20, 50, 76))

// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. 
// Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", 
// то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

//     Оголошена функція checkAccess(subType)
//     Використано оператор ||
//     Виклик checkAccess("pro") повертає true
//     Виклик checkAccess("starter") повертає false
//     Виклик checkAccess("vip") повертає true
//     Виклик checkAccess("free") повертає false

// function checkAccess(subType) {
//     return (subType === "pro" || subType === "vip")
// }

// console.log(checkAccess("pro"))
// console.log(checkAccess("starter"))
// console.log(checkAccess("vip"))
// console.log(checkAccess("free"))


// function toggleModalVisibility(isVisible) {}

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. 
// У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

//     Оголошена функція toggleModalVisibility(isVisible)
//     Виклик toggleModalVisibility(true) повертає false
//     Виклик toggleModalVisibility(false) повертає true
//     Використано оператор !

    // function toggleModalVisibility(isVisible) {
    //     return !isVisible 
    // }

    // console.log(toggleModalVisibility(true))
    // console.log(toggleModalVisibility(false))

//     Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, 
//     значення яких будуть задаватися під час її виклику:

//     string - оригінальний рядок
//     length - довжина нового підрядка

// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

//     Оголошена функція getSubstring(string, length)
//     Виклик функції getSubstring("Hello world", 3) повертає "Hel"
//     Виклик функції getSubstring("Hello world", 5) повертає "Hello"
//     Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
//     Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
//     Виклик функції getSubstring("Hello world", 0) повертає ""

// function getSubstring(string) {
// return string.slice(0, length);
// }

// getSubstring("Hello world", 3)
// console.log(getSubstring("Hello world" )) /"Hel"
// getSubstring("Hello world", 5) 
// console.log(getSubstring("Hello world", 5)) /"Hello"
// console.log(getSubstring("Hello world", 8)) /"Hello wo"
// console.log(getSubstring("Hello world", 11)) /"Hello world"
// console.log(getSubstring("Hello world", 0)) /""


// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase())
// console.log(message.slice (1,5))


// Функція normalizeInput(input, to) оголошує два параметри:

//     input - рядок, який потрібно привести до певного регістру
//     to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input

// Доповни код функції таким чином, щоб:

//     Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
//     В іншому разі, функція повертала копію рядка inputу нижньому регістрі

//     Оголошена функція normalizeInput(input, to)
//     Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
//     Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
//     Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
//     Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
//     Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
//     Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase()
//     } else {
//         return input.toLowerCase()
//     }
// }

// normalizeInput("This ISN'T SpaM", "lower")
// console.log(normalizeInput("This ISN'T SpaM", "lower"))
// normalizeInput("This ISN'T SpaM", "upper")
// console.log(normalizeInput("This ISN'T SpaM", "upper"))
// console.log(normalizeInput("Big SALE", "lower"))
// console.log(normalizeInput("Big SALE", "upper"))
// console.log(normalizeInput("Stay Awhile and Listen", "lower"))
// console.log(normalizeInput("Stay Awhile and Listen", "upper"))

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль 
// true або false - результат перевірки входження підрядка firstName у рядок fullName.

//     fullName - рядок, що містить повне ім'я
//     firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я

// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), 
// у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. 
// Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

//     Оголошена функція checkForName(fullname, firstName)
//     Виклик функції checkForName("Jason Neis", "Jason") повертає true
//     Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
//     Виклик функції checkForName("Jason Neis", "Jacob") повертає false
//     Виклик функції checkForName("Caty Stars", "Caty") повертає true
//     Виклик функції checkForName("Caty Stars", "cAtY") повертає true
//     Виклик функції checkForName("Caty Stars", "Andromeda") повертає false

// function checkForName(fullName, firstName) {
//     // const full = fullName.toLowerCase();
//     // const first = firstName.toLowerCase();
//     // return fullName.includes(firstName);
//     return fullName.includes(firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase());
// }

// console.log(checkForName("Jason Neis", "Jason"))
// console.log(checkForName("Jason Neis", "jAsOn"))
// console.log(checkForName("Jason Neis", "Jacob"))
// console.log(checkForName("Caty Stars", "Caty"))
// console.log(checkForName("Caty Stars", "cAtY"))
// console.log(checkForName("Caty Stars", "Andromeda"))
// console.log()
// console.log()


// Функція checkFileExtension(fileName, ext) приймає два параметри:

//     fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
//     ext - рядок, що зберігає розширення, наприклад, .css, .js тощо

// Доповни код функції так, щоб:

//     Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
//     В іншому разі, функція повертала рядок "File extension does not match"

//     Оголошена функція checkFileExtension(fullname, name)
//     Виклик функції checkFileExtension("styles.css", ".css") повертає "File extension matches"
//     Виклик функції checkFileExtension("styles.css", ".js") повертає "File extension does not match"
//     Виклик функції checkFileExtension("app.js", ".js") повертає "File extension matches"
//     Виклик функції checkFileExtension("app.js", ".html") повертає "File extension does not match"
//     Виклик функції checkFileExtension("index.html", ".html") повертає "File extension matches"
//     Виклик функції checkFileExtension("index.html", ".css") повертає "File extension does not match"
//     Виклик функції checkFileExtension("index.html", ".js") повертає "File extension does not match"


    // function checkFileExtension(fileName, ext) {
    //     if (fileName.endsWith(ext))
    //     {
    //         return "File extension matches"
    //     } else {
    //        return "File extension does not match"
    //     }
    // } 

    // checkFileExtension("styles.css", ".css")
    // console.log(checkFileExtension("styles.css", ".css"))
    // console.log(checkFileExtension("styles.css", ".js"))
    // console.log(checkFileExtension("app.js", ".js"))
    // console.log(checkFileExtension("app.js", ".html"))
    // console.log(checkFileExtension("index.html", ".html"))
    // console.log(checkFileExtension("index.html", ".css"))
    // console.log(checkFileExtension("index.html", ".js"))

//     Функція getFileName(file) приймає один параметр

//     file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.

// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

//     Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
//     Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
//     В іншому разі функція повертала підрядок з іменем файлу, але без розширення

//     Оголошена функція getFileName(file)
//     Виклик функції getFileName("styles.css") повертає "styles"
//     Виклик функції getFileName("app.js") повертає "app"
//     Виклик функції getFileName("app") повертає "app"
//     Виклик функції getFileName("index.js") повертає "index"
//     Виклик функції getFileName("index.html") повертає "index"
//     Виклик функції getFileName("index.css") повертає "index"
//     Виклик функції getFileName("index") повертає "index"

    // function getFileName(file) {
    // const index = file.indexOf(".")
    // if (index === -1) {
    //     return file
    // } else {
    //     return file.slice(0, file)
    // }
    // }

    // getFileName("styles.css")
    // console.log(getFileName("styles.css"))

//     Функція createFileName(name, ext) приймає два параметри:

//     name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку 
//     або в кінці рядка, наприклад "order ", " finance " тощо
//     ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо

// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне 
// (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. 
// Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

//     Оголошена функція createFileName(name, ext)
//     Виклик функції createFileName(" order ", "txt") повертає "order.txt"
//     Виклик функції createFileName("report ", "csv") повертає "report.csv"
//     Виклик функції createFileName(" presentation", "xml") повертає "presentation.xml"

    // function createFileName(name, ext) {
    //     return `${name.trim()}.${ext.trim()}`
    // }

    // console.log(createFileName(" order ", "txt"))
    // console.log(createFileName("report ", "csv"))
    // console.log(createFileName(" presentation", "xml"))

    // Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, 
    // щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, 
    // якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

    // Оголошена функція calculateTotal(number)
    // Виклик функції calculateTotal(1) повертає 1
    // Виклик функції calculateTotal(3) повертає 6
    // Виклик функції calculateTotal(0) повертає 0
    // Виклик функції calculateTotal(18) повертає 171
    // Виклик функції calculateTotal(24) повертає 300
    // Виклик функції calculateTotal() з випадковим числом повертає правильне значення

    // function calculateTotal(number) {
    //     let total = 0
    //      let count = 0
    //      while (count < number) {
    //         count += 1
    //         total += count
    //      }
    //      return total
    //    }

    // console.log(calculateTotal(1))   
    // console.log(calculateTotal(3))
    // console.log(calculateTotal(0))
    // console.log(calculateTotal(18))
    // console.log(calculateTotal(24))
  
    // Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, 
    // доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. 
    // Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

    // Оголошена функція calculateTotal(number)
    // Виклик функції calculateTotal(1) повертає 1
    // Виклик функції calculateTotal(0) повертає 0
    // Виклик функції calculateTotal(7) повертає 28
    // Виклик функції calculateTotal(18) повертає 171
    // Виклик функції calculateTotal(24) повертає 300
    // Виклик функції calculateTotal() з випадковим числом повертає правильне значення

    // function calculateTotal(number) {
    //     let total = 0
    //     for (let i = 0; i <= number; i += 1) {
    //         total += i
    //     }
    //     return total
    // }

    // console.log(calculateTotal(1)) 
    // console.log(calculateTotal(0)) 
    // console.log(calculateTotal(7)) 
    // console.log(calculateTotal(18)) 
    // console.log(calculateTotal(24)) 
    

    // Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, 
    // щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — 
    // це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). 
    // Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

    // Оголошена функція calculateEvenTotal(number)
    // Виклик функції calculateEvenTotal(1) повертає 0
    // Виклик функції calculateEvenTotal(3) повертає 2
    // Виклик функції calculateEvenTotal(7) повертає 12
    // Виклик функції calculateEvenTotal(18) повертає 90
    // Виклик функції calculateEvenTotal(27) повертає 182
    // Виклик функції calculateEvenTotal() з випадковим числом повертає правильне значення


    // function calculateEvenTotal(number) {
    //     let total = 0
    //     for (let i = 2; i <= number; i += 2) {
    //         total += i
    //     }
    //     return total
    // }

    // console.log(calculateEvenTotal(1)) 
    // console.log(calculateEvenTotal(3)) 
    // console.log(calculateEvenTotal(7)) 
    // console.log(calculateEvenTotal(18)) 
    // console.log(calculateEvenTotal(27)) 

    // Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

    // Оголошена змінна start
    // Оголошена змінна end
    // Оголошена змінна number
    // Якщо start це 6, а end це 17, то підсумкове значення змінної number дорівнює 10
    // Якщо start це 17, а end це 25, то підсумкове значення змінної number дорівнює 20
    // Якщо start це 2, а end це 11, то підсумкове значення змінної number дорівнює 5
    // В коді є цикл for, в якому використовується break для можливості виходу з циклу до завершення всіх ітерацій

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i += 1) {
//     if (i % 5 === 0) {
//        number = i
//     }
   
// }

// console.log(number)

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

//     повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
//     не використовуй оператор break

//     Оголошена функція findNumber(start, end, divisor)
//     Виклик findNumber(2, 6, 5) повертає 5
//     Виклик findNumber(8, 17, 3) повертає 9
//     Виклик findNumber(6, 9, 4) повертає 8
//     Виклик findNumber(16, 35, 7) повертає 21
//     Виклик findNumber() з випадковим набором чисел повертає правильний результат
//     В циклі for не повинен використовуватися break для можливості виходу з циклу до завершення всіх ітерацій

//     function findNumber(start, end, divisor) {
//         for (let i =start; 1 <= end; i += 1) {
//             if (i % divisor === 0) { 
//               return i   
//             }
//         }
//       }
      
// console.log(findNumber(2, 6, 5))
// console.log(findNumber(8, 17, 3))
// console.log(findNumber(6, 9, 4))
// console.log(findNumber(16, 35, 7))