//const linkon = document.querySelector(".link");
//console.log(linkon.classList); 
// ["link", "is-active", length: 2, value: "link is-active"]
//const hasActiveClass = linkon.classList.contains("is-active"); // true
//console.log(hasActiveClass)
//const hasActiveClasss = linkon.classList.contains("title"); // false
//console.log(hasActiveClasss)
//linkon.classList.add("specialogo" , "jgo")
//console.log(linkon.classList)

//linkon.classList.remove("specialogo")
//console.log(linkon.classList)


//linkon.classList.replace("link", "dick")
//console.log(linkon.classList)
//=============================================
// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

//const image = document.querySelector('.image')
//console.log(image)
//const hasAttribute = image.hasAttribute('href')
//console.log(hasAttribute)
//const getAttribute = image.getAttribute('href')
//console.log(getAttribute)
//const newAttribute = image.setAttribute('alt', 'Hello, my dick is very big')
//const got = image.getAttribute("alt")
//console.log(got)

//image.removeAttribute("alt");
//console.log(image.hasAttribute("alt")); // false

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
// saveBtn.dataset.action = "update";
// saveBtn.dataset.role = 'admin';

// console.log(saveBtn.dataset.action);
// console.log(saveBtn.dataset.role);
// delete saveBtn.dataset.action;
// console.log(saveBtn.dataset.action)

// const userBlock= document.querySelector('div[data-user-role="admin"]');

// // Додаємо новий data-атрибут data-user-status
// userBlock.dataset.userStatus = "online";

// console.log(element.dataset.userRole); // "admin"
// console.log(element.dataset.userStatus); // "online"

// const heading = document.createElement('h1')
// heading.classList.add('titile');
// heading.textContent = 'This is a heading';
// console.log(heading);
// const image = document.createElement('img')
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); 

// const friends = ['Oleg', 'Alyona', 'Lika', 'Annna', 'Viktor']
// const friendListElem = document.querySelector('.js-friend')



// function friendTemplate(friend) {
//     return `<li class="js-animals">${friend} </li>`
   
// }

// function renderFriends() {
//     const murkup = friends.map(friendTemplate).join('')
//     friendListElem.insertAdjacentHTML('beforeend', murkup);
// }
//Домашка 1 ЗАВДАННЯ///===================
// renderFriends()
// const categoriesList = document.getElementById('categories');
// const categoryItems = categoriesList.querySelectorAll('li.item');

// // Порахуємо та виведемо кількість категорій
// const numberOfCategories = categoryItems.length;
// console.log(`Number of categories: ${numberOfCategories}`);

// // Для кожної категорії виведемо заголовок та кількість елементів у категорії
// categoryItems.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const numberOfItems = category.querySelectorAll('ul > li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${numberOfItems}`);
//   console.log('------------------------');

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     alt: "Elephant Beside on Baby Elephant",
//   },
//   {
//     url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     alt: "Blue Geeen and Orange Parrot",
//   },
//   {
//     url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     alt: "Zebras on Zebra",
//   },
// ];

// const imagesListItem = document.querySelector('.gallery')

// function imagesTemplate(images){
//     return `<li class="gallery-item" >
//         <img src="${images.url}" alt="${images.alt}" class="gallery-img">
//     </li>`
// }



// function renderImages() {
//     const murkup = images.map(imagesTemplate).join('');
//     imagesListItem.insertAdjacentHTML('beforeend', murkup)
// }

 renderImages();
