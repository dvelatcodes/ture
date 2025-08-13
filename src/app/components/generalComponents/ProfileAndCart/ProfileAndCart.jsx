"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../../context/CartContext";
import "./styles.scss";

const ProfileAndCart = () => {
const context = useContext(CartContext);
if (!context) throw new Error("CartContext must be used within CartProvider");

  const { showCart, setShowCart, totalQuantity } = context;

  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="ProfileAndCart">
      <Link href="/">
        <CgProfile className="ProfileAndCart-icon" />
      </Link>
      <button onClick={handleClick}>
            <FaShoppingCart className='ProfileAndCart-icon'/>
            <span>
                {totalQuantity}
            </span>
      </button>
    </div>
  );
};

export default ProfileAndCart;
