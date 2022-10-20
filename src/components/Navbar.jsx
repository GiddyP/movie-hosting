import { useState } from "react";
import { close, iforex4, menu } from "../assets";
import { investProductsLinks, navLinks, pricingLinks, leverageProductsLinks, platformLinks, loyaltyLinks, accountTypeLinks } from "../constants";
import { Button } from '../components';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex pt-1 pb-3 justify-between items-center
       navbar">
      {/* Image Logo */}
      <img
        src={iforex4}
        alt="hoobank"
        className="md:w-[180px] md:h-[44px] w-[150px] h-[40px] object-cover cursor-pointer"
      />
      {/* large screen menu */}
      <ul className="menu 
      font-poppins font-semibold cursor-pointer text-[15px] ss:text-sm
      md:flex hidden justify-start mr-5 
            mt-5 flex-1  text-dimWhite">
        <li className="inline-block relative"><a className="block px-[10px] py-[.5rem]" href="#">Product</a>
          <ul className="submenu">

            <li className={'block px-[1px] py-[.rem]'}>
              <a className="block px-[8px] py-[.6rem]" href='#'>Investment Products</a>
              <ul className="submenu2">
                {investProductsLinks.map((product2, index) => (
                  <li key={product2.id}
                    className={'block px-[1px] py-[.rem]'}
                  >
                    <a className="block px-[8px] py-[.6rem]" href={`${product2.id}`}>{product2.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={'block px-[1px] py-[.rem]'}>
              <a className="block px-[8px] py-[.6rem]" href='#'>Leveraged Products</a>
              <ul className="submenu2">
                {leverageProductsLinks.map((product2, index) => (
                  <li key={product2.id}
                    className={'block px-[1px] py-[.rem]'}
                  >
                    <a className="block px-[8px] py-[.6rem]" href={`${product2.id}`}>{product2.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={'block px-[1px] py-[.rem]'}>
              <a className="block px-[8px] py-[.6rem]" href='#'>Pricing</a>
              <ul className="submenu2">
                {pricingLinks.map((product2, index) => (
                  <li key={product2.id}
                    className={'block px-[1px] py-[.rem]'}
                  >
                    <a className="block px-[8px] py-[.6rem]" href={`${product2.id}`}>{product2.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li className="inline-block relative"><a className="block px-[12px] py-[.5rem]" href="#">Platform</a>
          <ul className="submenu">
            {platformLinks.map((product1, index) => (
              <li key={product1.id}
                className={'block py-[.rem]'}
              >
                <a className="block px-[6px] py-[.6rem]" href={`${product1.id}`}>{product1.name}</a>
              </li>
            ))}
          </ul>
        </li>

        <li className="inline-block relative"><a className="block px-[10px] py-[.5rem]" href="#">Account</a>
          <ul className="submenu">
            <li className={'block px-[1px] py-[.rem]'}>
              <a className="block px-[8px] py-[.6rem]" href='#'>Account Types</a>
              <ul className="submenu2">
                {accountTypeLinks.map((product, index) => (
                  <li key={product.id}
                    className={'block px-[1px] py-[.rem]'}
                  >
                    <a className="block px-[4px] py-[.6rem]" href={`${product.id}`}>{product.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={'block px-[1px] py-[.rem]'}>
              <a className="block px-[8px] py-[.6rem]" href='#'>Loyalty</a>
              <ul className="submenu2">
                {loyaltyLinks.map((product, index) => (
                  <li key={product.id}
                    className={'block px-[1px] py-[.rem]'}
                  >
                    <a className="block px-[8px] py-[.6rem]" href={`${product.id}`}>{product.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>

        <li className="inline-block relative"><a className="block px-[12px] py-[.5rem]" href="#">About</a>
        </li>
      </ul>

      <div className="mr-5 mt-2 hidden md:flex">
        <Button styles={`sm:flex hidden font-poppins inline-block px-4 py-1 border-2 border-dimWhite 
        text-dimWhite font-medium text-xs leading-tight rounded-md hover:bg-white hover:bg-opacity-5 
        focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
          text={`Login`}
        />
      </div>
      <div className="mr-5 mt-2">
        <Button styles={`cursor-pointer hidden sm:flex font-poppins inline-block px-4 py-3 border-2 border-blue-700 
        text-white font-medium text-xs leading-tight rounded-md bg-blue-700 
        focus:outline-none focus:ring-0 transition duration-150 ease-in-out sm:py-1`}
          text={`Open Account`}
        />
      </div>
      {/* small screen menu  */}
      <div className="sm:hidden flex flex-1 justify-end items-center mt-2">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          // Do this when you want to change the state of the 
          // screen
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {/* small screen menu cont.d  */}
      <div
        className={`${toggle ? 'flex' : 'hidden'}
               p-6 bg-black-gradient absolute top-12 right-0
               mx-4 my-2 min-w-[140px] rounded-b-md sidebar`}>
        <ul className="list-none flex flex-col justify-end 
                  items-center flex-1">
          {/* this gets the individual value in the array NavLinks  */}
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer 
                          text-[16px]
                          ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
                          text-greyWhite hover:text-dimWhite`}
            >
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;