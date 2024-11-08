import React  from "react";

function header(){
    return (
        <div className="absolute top-0 left-0 mb-4 mr-4 z-10 bg-inherit">
          

<div className="flex flex-wrap place-items-center bg-inherit">
  <section className="relative mx-auto">
    <nav className="flex justify-between bg-gray-900 text-white w-screen bg-inherit">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500" href="#">
          hear.oi
        </a>


        
<form className="w-full ml-60 mr-60">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products, services..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>



        <div className="hidden xl:flex items-right space-x-5 items-right">
          <a className="hover:text-gray-200" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 3c-1.5 0-3 1-3 3 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-2.5-3-2.5zm-1 7h2v2h-2z" />
</svg>

          </a>
         
          <a className="flex items-center hover:text-gray-200" href="#Foot">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M3 8a3 3 0 00-3 3v8a3 3 0 003 3h18a3 3 0 003-3v-8a3 3 0 00-3-3M3 8l9 5 9-5" />
</svg>

          </a>
          
        </div>
         </div>
     
    </nav>
    
  </section>
</div>

  </div>   
    )
}

export default header;