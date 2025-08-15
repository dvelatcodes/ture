"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../../context/CartContext";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { reset, getUser } from "../../../store/features/authSlice";
import { toast } from "react-hot-toast";

const ProfileAndCart = () => {
  const context = useContext(CartContext);
  const [userName, setUserName] = useState("");

  if (!context) throw new Error("CartContext must be used within CartProvider");

  const { showCart, setShowCart, totalQuantity } = context;

  const handleClick = () => {
    setShowCart(!showCart);
  };

  const dispatch = useDispatch();
  const { isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else if (isSuccess) {
      setUserName(user?.firstName);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  return (
    <div className="ProfileAndCart">
      <Link href="/profile" className="p-icon">
        <CgProfile className="ProfileAndCart-icon" />
        <span>{userName === "" ? "" : userName}</span>
      </Link>
      <button onClick={handleClick}>
        <FaShoppingCart className="ProfileAndCart-icon" />
        <span>{totalQuantity}</span>
      </button>
    </div>
  );
};

export default ProfileAndCart;
