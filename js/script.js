// Homework: 02
//! Создать свой *Ресторан / Магазин / Футбольную команду* используя: ----------
// Типы данных - string, number, boolean, null, undefined
let footballTeam = "Real Madrid"; // string
const salary = 310000; // number
const isSummer = false; // boolean
let apple = null; // null
let kazakhHandygy; // undefined

// Объекты - создание, добавление и удаление свойства (через прямые скобки тоже)
// создание
let restaurant = {
  city: "Almaty",
  adress: "Zhandosov - Rozybakiev",
  waitress: 34,
  administrator: 4,
  security: 8,
  cook: 12,
  isTwentyFourSeven: false,
};
const shop = {
  adress: "Abay 105",
  city: "Almaty",
  employees: 4,
  ["1 employee"]: "Marzhan",
  ["2 employee"]: "Nurgazy",
  ["3 employee"]: "Ozbekali",
  ["4 employee"]: "Zhansaya",
  isTwentyFourSeven: true,
};

// добавление объекта
restaurant["average bill"] = 9000; // через прямые скобки
shop.monthlyProfit = "1400000"; // без скобок

//удаление объекта
delete shop["3 employee"]; // через прямые скобки
delete restaurant.cook; // без скобок

//! Работа с объектами --------------------------
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// 1. Создайте пустой объект vehicle.
let vehicle = {};
// 2. Добавьте свойство brandName со значением BMW (либо любая ваша любимая марка).
vehicle.brandName = "BMW";
// 3. Добавьте свойство  model со значением X5 (либо любая ваша любимая модель).
vehicle.model = "X5";
// 4. Измените значение свойства model на M1.
vehicle.model = "M1";
// 5. Удалите свойство model из объекта.
delete vehicle.model;

//! Работа с перебором свойств в объектах -----------------
// 1. Создайте объект salaries, где ключом(свойстовом) является имя, a значением зарплата.
let salaries = {
  Baglan: 100,
  Zhanbolat: 100,
  Baqyt: 100,
  Beka: 100,
};
// 2. С помощью for .. in  просуммируйте все значения и выведите в консоли.
let count = 0;
for (let key in salaries) {
  count += salaries[key];
}
console.log(count); //400
