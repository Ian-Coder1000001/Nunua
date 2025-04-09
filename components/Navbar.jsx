


"use client"
import React, { useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user, products } = useAppContext();
  const {openSignIn} = useClerk();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Filter products by search query and navigate to a search results page
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // Store filtered products in session storage or use query params
      sessionStorage.setItem('searchResults', JSON.stringify(filteredProducts));
      router.push('/search-results');
    }
  }

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer') || document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" onClick={scrollToFooter} className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" onClick={scrollToFooter} className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        {showSearchInput ? (
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-l px-2 py-1 text-sm w-40"
              placeholder="Search products..."
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              onClick={handleSearch}
              className="bg-gray-100 border border-l-0 rounded-r px-2 py-1"
            >
              <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
            </button>
          </div>
        ) : (
          <Image 
            className="w-4 h-4 cursor-pointer" 
            src={assets.search_icon} 
            alt="search icon" 
            onClick={() => setShowSearchInput(true)}
          />
        )}
        { 
        user
         ? <>
         <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
         </UserButton>
         
         </>
          : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        { 
        user
         ? <>
         <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Home" labelIcon={<HomeIcon/>} onClick={()=> router.push('/')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Products" labelIcon={<BoxIcon/>} onClick={()=> router.push('/all-products')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
         </UserButton>
         
         </>
          : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;