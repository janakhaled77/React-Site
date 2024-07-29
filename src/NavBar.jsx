import {NavLink} from "react-router-dom"
function NavBar(){
    return(
//         <div className="mb-3">
// <ul className="flex justify-evenly items-center p-3">
// <li className=" border-red-400"><NavLink to="About">About</NavLink></li>
// <li className=" border-red-400"><NavLink to="Portofolio">Portofolio</NavLink></li>
// <li className=" border-red-400"><NavLink to="Contact">Contact</NavLink></li>
// </ul>
//       </div>


<nav className="border-gray-200 bg-gray-700 dark:bg-gray-800 dark:border-gray-700 p-3">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white text-white">SMART FRAMEWORK</span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li className="p-5 text-white text-xl" ><NavLink to="About">About</NavLink></li>
        <li className="p-5 text-white text-xl"><NavLink to="Portofolio">Portofolio</NavLink></li>
        <li className="p-5 text-white text-xl"><NavLink to="Contact">Contact</NavLink></li>
      </ul>
    </div>
  </div>
</nav>

    )
}
export default NavBar;