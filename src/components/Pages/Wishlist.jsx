import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowCircleLeft, FaHeart } from "react-icons/fa";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "Do You Want To Remove This Item From Wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#db1a14",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, Remove It!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter((item) => item.Id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
        toast.success("Item Removed From The Wishlist");
      }
    });
  };

  const addToCart = (product) => {
    toast.success(`${product.Name} Added To The Cart!`);
  };

  return (
    <>
      <div className="w-full px-4 sm:px-8 lg:px-[10%] py-12 bg-white text-gray-800">
        <Toaster position="top-right" reverseOrder={false} />
        <h1 className="flex flex-wrap items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-center font-bricolage gap-3 sm:gap-4">
          <FaHeart className="text-pink-500 mr-1 sm:mr-2" /> My Wishlist
        </h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-10 text-gray-500 gap-2 px-4">
          <FaRegFaceSadCry className="text-2xl sm:text-3xl" /> 
          <span className="text-base sm:text-lg">No Item In Your Wishlist!</span>
        </div>
      ) : (
        <div className="overflow-x-auto px-4 sm:px-8 lg:px-[10%]">
          <table className="min-w-full text-left border-separate border-spacing-y-4 sm:border-spacing-y-6">
            <thead>
              <tr className="text-xs sm:text-sm md:text-base text-gray-500 border-b border-gray-200">
                <th className="w-[40px] sm:w-[60px]"></th>
                <th className="py-1 text-sm sm:text-base md:text-xl">Product</th>
                <th className="text-center text-sm sm:text-base md:text-xl">Unit Price</th>
                <th className="text-center text-sm sm:text-base md:text-xl">Stock</th>
                <th className="text-center text-sm sm:text-base md:text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr
                  key={product.Id}
                  className="bg-white border rounded-xl shadow-sm hover:shadow-md transition text-xs sm:text-sm md:text-base"
                >
                  <td className="align-middle text-center">
                    <button
                      onClick={() => removeFromWishlist(product.Id)}
                      className="text-lg sm:text-xl text-gray-400 hover:text-red-600 p-2 sm:p-3"
                      title="Remove"
                    >
                      <MdOutlineRemoveCircle className="text-xl sm:text-2xl" />
                    </button>
                  </td>

                  <td className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 py-3 sm:py-4 px-2">
                    <img
                      src={product.ProductsImage}
                      alt={product.Name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain border p-1 sm:p-2 rounded-lg"
                    />
                    <span className="font-semibold text-gray-700 text-center sm:text-left">
                      {product.Name}
                    </span>
                  </td>

                  <td className="text-center text-gray-700 font-medium">{product.Price}</td>
                  <td className="text-center text-green-600">In Stock</td>
                  <td className="text-center">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs sm:text-sm px-3 sm:px-4 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 sm:mt-10 text-center pb-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 text-md sm:text-md font-semibold text-yellow-500 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all"
            >
              <FaArrowCircleLeft className="text-xl sm:text-2xl" />
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
