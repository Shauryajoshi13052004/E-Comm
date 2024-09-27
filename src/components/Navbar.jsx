import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink , Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
    const [visible,setVisible] = useState(false);
    const{setShowSearch,getCartCount} = useContext(ShopContext)

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={'/'}>
      <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ">
                
                <Link to='/login'>
                <img src={assets.user} className="w-5 cursor-pointer" alt="" />
                </Link>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    My Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Orders
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Logout
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

        </div>
          <Link className="relative" to='/cart'>
          <img src={assets.cart} className="w-5 min-e-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>
          
          <img src={assets.menu} onClick={()=>setVisible(true)} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>

      {/* sidebar menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white translateall ${visible ? 'w-full' : 'w-0'} `}>
        <div className="flex flex-col text-gray-600 cursor-pointer">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
                <img src= {assets.back} className="h-4 rotate-180" alt="" />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
