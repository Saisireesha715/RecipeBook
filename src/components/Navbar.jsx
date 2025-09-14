
// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-3">
//           <span className="self-center text-2xl font-poppins text-orange-600">
//             RecipeBook
//           </span>
//         </a>

//         {/* Hamburger button (mobile only) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           {isOpen ? (
//             // Close (X) icon
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             // Hamburger (☰) icon
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Menu links */}
//         <div
//           className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>

//                 <div className="absolute top-full left-0 w-full overflow-hidden leading-[0] ">
//         <svg
//           viewBox="0 0 1440 120"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           className="block w-full h-[80px] "
//         >
//           <path d="M0,32 C360,120 1080,0 1440,80 L1440,0 L0,0 Z" fill="#ffffff" />
//         </svg>
//       </div>

//         </div>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-Barriecito text-orange-600">
            RecipeBook
          </span>
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            // Close (X) icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger (☰) icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        {/* Menu links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-mono flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-orange-500 hover:text-green-600 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>

                <div className="absolute top-full left-0 w-full overflow-hidden leading-[0] ">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[80px] "
        >
          <path d="M0,32 C360,120 1080,0 1440,80 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

        </div>
      </div>
    </nav>
  );
}
