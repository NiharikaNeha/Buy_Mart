import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {

    const storedWishlist = JSON.parse(localStorage.getItem('wishlistItem'))
    setWishlist(storedWishlist);
  }, [])

  const removeFromWishlist = (id) => {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Do You Want To Remove This Item From Wishlist?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, Remove It!',
    }).then((result) => {
      if(result.isConfirmed) {
        const updatedWishlist = wishlist.filter(item => item.id)
      }
    })
  }
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist