// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const headerDiv = document.querySelector('.header')

function menuMaker(array){
  const divMenu = document.createElement('div');
  const menuButton = document.querySelector('.menu-button')
  const menuList = document.createElement('ul')
  divMenu.classList.add("menu");
  array.forEach (item =>{
    const list = document.createElement('li');
    list.textContent = item;
    menuList.appendChild(list);
  
  })
  divMenu.appendChild(menuList);
  menuButton.addEventListener('click', event =>{
    divMenu.classList.toggle('menu--open');
  })
  return divMenu;
}

headerDiv.appendChild(menuMaker(menuItems));
//   const listMenu = document.createElement('div')
//   const listUL = document.createElement('ul')
//   const listStudents = document.createElement('li');
//   const listFaculty = document.createElement('li');
//   const listWhatsNew = document.createElement('li');
//   const listTechTrends = document.createElement('li');
//   const listMusic = document.createElement('li');
//   const listLogOut = document.createElement('li');

//   listMenu.appendChild(listUL);
//   listUL.appendChild(listStudents);
//   listUL.appendChild(listFaculty);
//   listUL.appendChild(listWhatsNew);
//   listUL.appendChild(listTechTrends);
//   listUL.appendChild(listMusic);
//   listUL.appendChild(listLogOut);

//   listMenu.classList.add('menu');
  
//   listStudents.textContent = menuLink
  
//   menuButton.addEventListener('click', event =>{
//     listMenu.classList.toggle('menu--open')
//   })
//   return listMenu;

// }
// menuItems.map((menuString) =>{
//   menuButton.appendChild(
//   menuMaker(menuString))
// })
// menuItems.forEach(info =>{
//   menuButton.appendChild(menuMaker(info ))
//   console.log(info)
// })

