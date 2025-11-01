import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { MdOutlineRemoveCircle } from "react-icons/md";

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
        <h1 className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-center font-bricolage gap-4">
          <FaHeart className="text-pink-500 mr-2" /> My Wishlist
        </h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex items-center justify-center text-center py-10 text-gray-500 gap-2">
          <FaRegFaceSadCry className="text-2xl" /> No Item In Your Wishlist!
        </div>
      ) : (
        <div className="overflow-hidden hidden md:block px-[10%]">
          <table className="w-full text-left border-separate border-spacing-y-6">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th></th>
                <th className="py-1 text-xl">Product</th>
                <th className="text-center text-xl">Unit Price</th>
                <th className="text-center text-xl">Stock</th>
                <th className="text-center text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr
                  key={product.Id}
                  className="bg-white border rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <td className="align-middle text-center">
                    <button
                      onClick={() => removeFromWishlist(product.Id)}
                      className="text-xl text-gray-400 hover:text-red-600 p-3"
                      title="Remove"
                    >
                      <MdOutlineRemoveCircle className="text-2xl" />
                    </button>
                  </td>

                  {/* ✅ Product info section */}
                  <td className="flex items-center gap-4 py-4 px-2">
                    <img
                      src={product.ProductsImage}
                      alt={product.Name}
                      className="w-24 h-24 object-contain border p-2 rounded-lg"
                    />
                    <span className="font-semibold text-gray-700">{product.Name}</span>
                  </td>

                  <td className="text-center text-gray-700 font-medium">
                    ₹{product.Price}
                  </td>
                  <td className="text-center text-green-600">In Stock</td>
                  <td className="text-center">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Wishlist;
