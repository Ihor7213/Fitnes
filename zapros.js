// const resp = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => console.log(data)
// )
// console.log(resp);

// const box = document.querySelector(".box")
// async function dataName() {
//     const response = await fetch("https:jsonplaceholder.typicode.com/users");
//     const pars = await response.json()
//     return pars
// }
// async function renderData() {
//     const dataObject = await dataName();
//     dataObject.forEach(element => {
//         box.innerHTML += `<h2>${element.name}</h2>`
//     });
// }
// renderData();


// API
// 'https://jsonplaceholder.typicode.com/users'


// Задача 1 
// Получите всех пользователей, работающих в компании с именем "Romaguera-Crona".
// const box = document.querySelector(".box")
// async function recData() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/users");
//     const par = await api.json();
//     return par
// }
// async function nameUsers() {
//     const obj = await recData();
//     const comp = obj.filter(e => e.company.name === "Romaguera-Crona")
//     comp.forEach(e => {
//         box.innerHTML += `<h2>${e.name}</h2>`
//     });
// }
// nameUsers();

// Задача 2 
// Задача: Извлеките массив всех вебсайтов, указанных пользователями.

// const box = document.querySelector(".box")
// async function recData() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/users");
//     const par = await api.json();
//     return par
// }
// async function webUser() {
//     const arr = await recData();
//     const webArr = arr.map(e => e.website);
//     webArr.forEach(e => {
//         box.innerHTML += `<h2>${e}</h2>`
//     });
// }
// webUser();


// Задача 3 
// Задача: Извлеките массив всех телефонных номеров пользователей.

// async function recData() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/users");
//     const par = await api.json();
//     return par
// }
// async function webUser() {
//     const arr = await recData();
//     const webArr = arr.map(e => e.phone);
//     console.log(webArr)
// }
// webUser();

// Задача 4 
// Найдите первого пользователя с именем "Clementine Bauch".

// const box = document.querySelector(".box")
// async function recData() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/users");
//     const par = await api.json();
//     return par
// }
// async function searshUsers() {
//     const filData = await recData();
//     const newArr = filData.filter(e => e.name === "Clementine Bauch");
//     box.innerHTML = `<p>${newArr[0].name}</p>`
// }
// searshUsers();
// Описание: Создайте инпут для ввода имени пользователя и кнопку для поиска. При нажатии на кнопку отображайте найденного пользователя на странице.
// const div = document.querySelector(".box")
// const input = document.querySelector(".user_neme")
// const but = document.querySelector(".clats")
// async function getUser() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await api.json();
//     return data
// }
// async function renderUser() {
//     const dataArr = await getUser();
//     const enter = input.value;
//     const filterUser = dataArr.filter(e => e.name === enter)
//     div.innerHTML = `<h2>${filterUser[0].name}</h2>`
// }
// but.addEventListener("click", renderUser);

// ДЗ

// Задача 1 
// Сделать запрос к API и вывести список всех продуктов на страницу с отображением названия, цены и изображения.
// const div = document.querySelector(".box");
// async function newList() {
//     const api = await fetch("https://fakestoreapi.com/products");
//     const data = await api.json();
//     return data;
// }
// async function fullInfo() {
//     const func = await newList();
//     func.forEach(e => {
//         div.innerHTML += `<h2>${e.title}</h2> 
//                           <p>$${e.price}</p> 
//                           <img src="${e.image}">`
//     });
// }
// fullInfo();


// Задача 2 
// Пользователь вводит минимальную цену, и на странице отображаются все продукты, которые стоят дороже введенной суммы.
// const div = document.querySelector(".box");
// const inp = document.querySelector(".user_neme")
// async function newList() {
//     const api = await fetch("https://fakestoreapi.com/products");
//     const data = await api.json();
//     return data;
// }
// async function fullInfo() {
//     const func = await newList();
//     const prs = inp.value;
//     div.innerHTML = '';
//     func.forEach(e => {
//         if (e.price > prs) {
//                             div.innerHTML += `<h2>${e.title}</h2> 
//                             <p>$${e.price}</p> 
//                             <img src="${e.image}">`
//         }    
//     });
// }
// inp.addEventListener("input", fullInfo);


// Задача 3
// Пользователь вводит название продукта или часть названия, и на странице отображаются все продукты, которые соответствуют поиску.

// const div = document.querySelector(".box");
// const inp = document.querySelector(".user_neme")
// async function newList() {
//     const api = await fetch("https://fakestoreapi.com/products");
//     const data = await api.json();
//     return data;
// }
// async function fullInfo() {
//     const func = await newList();
//     const prs = inp.value.toLowerCase();
//     div.innerHTML = '';
//     func.forEach(e => {
//         if (e.title.toLowerCase().includes(prs)) {
//                             div.innerHTML += `<h2>${e.title}</h2> 
//                             <p>$${e.price}</p> 
//                             <img src="${e.image}">`
//         }    
//     });
// }
// inp.addEventListener("input", fullInfo);

// https://fakestoreapi.com/products

// Описание: Получите все продукты и выведите их на страницу в отсортированном по возрастанию или убыванию порядке, в зависимости от выбора пользователя.
// const div = document.querySelector(".box")
// const butTop = document.querySelector(".top")
// const butBot = document.querySelector(".dottom")
// async function newData() {
//     const api = await fetch("https://fakestoreapi.com/products");
//     const data = await api.json();
//     return data
// }
// async function sort() {
//     const foolProd = await newData();
//     div.innerHTML = "";
//     const sortTop = foolProd.sort((a, b) => b.price - a.price);
//     sortTop.forEach(e => {
//         div.innerHTML += `<h2>${e.title}</h2> 
//         <p>$${e.price}</p> 
//         <img src="${e.image}">`
//     });

// }
// async function sortBot() {
//     const foolPro = await newData();
//     div.innerHTML = "";
//     const sortBottom = foolPro.sort((a, b) => a.price - b.price);
//     sortBottom.forEach(e => {
//         div.innerHTML += `<h2>${e.title}</h2> 
//         <p>$${e.price}</p> 
//         <img src="${e.image}">`
//     });
// }
// butTop.addEventListener("click", sort);
// butBot.addEventListener("click", sortBot);


// Получите все продукты и выведите их общую стоимость (сумма всех цен) на страницу
// const clats = document.querySelector(".top");
// const div = document.querySelector(".box");
// async function newData() {
//     const api = await fetch("https://fakestoreapi.com/products");
//     const data = await api.json();
//     return data
// }
// async function foolPrice() {
//     const arrData = await newData();
//     const sum = arrData.reduce((acc,e) => acc + e.price, 0).toFixed(2);
//     div.innerHTML = `<h2>${sum}</h2>`
// }
// clats.addEventListener("click", foolPrice)




// На те вам задачки на объекты 
// Задача 1 
// Задача: Извлеките все уникальные skills из массива сотрудников и создайте объект, где ключом будет skill, а значением — количество людей с этим навыком.
// const employees = [
//     { name: 'John', skills: ['JavaScript', 'React'] },
//     { name: 'Alice', skills: ['JavaScript', 'Node.js'] },
//     { name: 'Bob', skills: ['React', 'CSS'] }
// ];
// output // {
//     JavaScript: 2,
//     React: 2,
//     'Node.js': 1,
//     CSS: 1
// }

// Задача 2 
// Задача: Отфильтруйте массив объектов, оставив только те объекты, у которых все значения больше 10.
// const data = [
//     { id: 1, values: { a: 12, b: 15 } },
//     { id: 2, values: { a: 8, b: 25 } },
//     { id: 3, values: { a: 20, b: 30 } }
// ];
// output// [
//     { id: 1, values: { a: 12, b: 15 } },
//     { id: 3, values: { a: 20, b: 30 } }
// ]