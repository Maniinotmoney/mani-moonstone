// const navItem=[
//     {
//         menu:"Home",
//         path:"/src/index.html"
//     },
//     {
//         menu:"Courses",
//         submenu:[
//             {
//                course:"Data Science",
//                path:"/src/courses/datascience.html"
//             },
//             {
//                course:"Data Anatytics",
//                path:"/src/courses/dataAnalytics.html"
//             },
//             {
//                course:"Digital Marketing",
//                path:"/src/courses/digitalMarketing.html"
//             },
//             {
//                course:"Advance Excel",
//                path:"/src/courses/advanceExcel.html"
//             },
//             {
//                course:"SQL",
//                path:"/src/courses/sql.html"
//             },
//             {
//                course:"Web Development",
//                path:"/src/courses/webdevelopment.html"
//             },
//         ]
//     },
//     {
//         menu:"Corporate Training",
//         path:"/src/pages/corporate.html"
//     },
//     {
//         menu:"About",
//         path:"/src/pages/about.html"
//     },
//     {
//         menu:"Placement",
//         path:"/src/pages/Placement.html"
//     },
//     {
//         menu:"Contact Us",
//         path:"/src/pages/contact.html"
//     },
   
// ];


// const navHtml=`

// <header class="absolute top-0 bg-white  w-full z-50">
// <nav class="flex md:flex-row bg-transparent flex-col py-2 justify-between items-center">
//     <div class="w-48 ms-4">
//         <a href="/index.html"><img class="w-full" src="/media/image/logo1.png" alt="logo"></a>
//     </div>
//     <button id="navbarToggle" class=" absolute right-3 top-3 z-20 bold md:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//         </svg>
//     </button>
//     <ul id="navbarLinks" class="flex bg-transparent items-center absolute gap-3 md:gap-0 md:relative h-full  w-full justify-center md:flex-row  md:justify-end z-10  flex-col md:flex">
//     ${
//         navItem.map(item => {
//             if (item.submenu) {
//                 return `<li class="flex w-full md:w-auto flex-col items-center md:block relative">
//                             <a href="#" class= px-3 py-2">${item.menu}</a>
//                             <ul class="w-full md:w-52 md:absolute flex flex-col items-center md:items-start hidden z-10 bg-white shadow py-2 rounded-md">
//                                 ${item.submenu.map(subitem => `
//                                 <li class=""><a  href="${subitem.path}" class="px-3 uppercase leading-tight w-full  py-2">${subitem.course}</a></li>`).join('')}
//                             </ul>
//                         </li>`;
//             } else {
//                 return `<li><a href="${item.path}" class= px-3 uppercase leading-tight  py-2">${item.menu}</a></li>`;
//             }
//         }).join('')
//     }
        
//     </ul>
// </nav>
// </header>
// `
// document.addEventListener("DOMContentLoaded", function() {
//     const navbarToggle = document.getElementById('navbarToggle');
//     const navbarLinks = document.getElementById('navbarLinks');
//     const coursesToggle = document.querySelector('#navbarLinks > li.relative');
//     const coursesSubmenu = coursesToggle.querySelector('ul');

    
//     navbarToggle.addEventListener('click', () => {
//         navbarLinks.classList.toggle('hidden');
//     });


//     coursesToggle.addEventListener('click', () => {
//         coursesSubmenu.classList.toggle('hidden');
//     });

//     document.addEventListener('click', (event) => {
//         const target = event.target;

//         if (!navbarLinks.contains(target) && target !== coursesToggle && target !== coursesSubmenu) {
//             coursesSubmenu.classList.add('hidden');
//         }
//     });
// });

let navHtml=`
<nav class="bg-white border border-gray-200   px-2 sm:px-4 py-2.5 rounded   shadow">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/index.html" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap  ">
            
            <img class="w-40" src="/media/image/logo1.png" alt="logo">
            
        </span>
      </a>
  
      <div class="flex items-center">
        <button
          id="menu-toggle"
          type="button"
          class="inline-flex  items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200       md:hidden"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon -->
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
  
      <div
        class="w-full md:block md:w-auto hidden"
        id="mobile-menu"
      >
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a
              href="/index.html"
              class="block py-2 pr-4 pl-3  text-white bg-blue-700 rounded md:bg-transparent md:text-purple-700 md:p-0  "
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0         "
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="/pages/corporate.html"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0         "
            >
              Corporate Training
            </a>
          </li>
          <li>
            <a
              href="/pages/english.html"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0         "
            >
            Spoken English
            </a>
          </li>
          <li>
            <a
              href="/pages/about.html"
              class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0       "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/pages/about.html"
              class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0       "
            >
              Placement
            </a>
          </li>
          <li>
            <a
              href="/pages/contact.html"
              class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0       "
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
  
    </div>
  </nav>`

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
})