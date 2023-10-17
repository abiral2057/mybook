

const Header = () => {
  return (
    <div>    
      

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" id="slideright" className="flex items-center">
      <img  src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-name.e436e18b.png&w=256&q=75 "   className="h-8 mr-10" alt="Madhevi" />
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul id="slideleft" className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
        <button className="rounded-lg capitalize font-medium text-xs sm:text-sm md:text-base md:leading-[22px] tracking-[0.06em] px-8 py-[13px]" style={{color:"black"}}>Login</button>
        </li>
        <li>
          <button className="rounded-lg capitalize font-medium text-xs sm:text-sm md:text-base md:leading-[22px] tracking-[0.06em] px-8 py-[13px] text-primary-blue shadow-box bg-white" style={{color:"#45b8ea" ,  boxShadow: '0px 2px 15px rgb(221, 224, 234) '}}>Sign Up</button>
        </li>
      
      </ul>
    </div>
  </div>
</nav>


  
  </div>
  )
}

export default Header