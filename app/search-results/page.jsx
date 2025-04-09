"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import Loading from "@/components/Loading";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { products } = useAppContext();

  useEffect(() => {
    // Get search results from session storage
    const results = sessionStorage.getItem('searchResults');
    
    if (results) {
      setSearchResults(JSON.parse(results));
    } else {
      // Fallback to all products if no search results found
      setSearchResults(products);
    }
    
    setLoading(false);
  }, [products]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-12">
        <h1 className="text-2xl font-medium mb-6">Search Results</h1>
        
        {searchResults.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">No products found. Try a different search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {searchResults.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;