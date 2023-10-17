 import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>  
      
      <div className="line mt-12" style={{backgroundColor:"gray",height:"3px",fontWeight:"lighter"}} >

      <div className="grid grid-cols-3 gap-4 mt-10">
  <div className="mt-10">Who we are
  <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 ...">Home</div>
  <div className="row-span-3 ...">Feature</div>
  </div>
  </div>
  <div className="mt-10">Company
  <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 ...">Home</div>
  <div className="row-span-3 ...">Feature</div>
  </div>
  </div>
  <div className="mt-10">Socials
  <div className="grid grid-cols-3 grid-flow-col gap-1">
  <div className="col-span-1 ...">icon1</div>
  <div className="col-span-1 ...">icon2</div>
  <div className="col-span-1 ...">icon3</div>
  <div className="col-span-1 ...">icon4</div>
  </div>
  </div>
  </div>
      </div>

<footer id="footer" className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 ">
  
  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="#" className="hover:underline"><img src="https://medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-name.e436e18b.png&w=256&q=75"/></a>© 2023 . All Rights Reserved.
  </span>
  <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
      <Link to= '/about' className="mr-4 hover:underline md:mr-6">About</Link>
    </li>
    <li>
      <Link to= '' className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
    </li>
    <li>
      <Link to= '' className="mr-4 hover:underline md:mr-6">Licensing</Link>
    </li>
    <li>
      <Link to= '' className="hover:underline">Contact</Link>
    </li>
  </ul>
</footer>


  
  
  </div>
  )
}

export default Footer