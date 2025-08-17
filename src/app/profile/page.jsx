"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  getUser,
  logout,
  changePassword,
} from "../store/features/authSlice";
import { toast } from "react-hot-toast";

// import { changePassword, isError } from "../store/features/authSlice";
import { useRouter } from "next/navigation";

import "../form/styles.scss";
import "./styles.scss";
import { PT_Serif } from "next/font/google";

const page = () => {
  const [showSide, setShowSide] = useState(false);
  const [userName, setUserName] = useState("");
  const [swap, setSwap] = useState("");
  const router = useRouter();

  const [passCover, setPassCover] = useState({
    prevPassword: "",
    newPassword: "",
  });

  const [showPass, setShowPass] = useState(true);
  const [Pchecker, setPchecker] = useState({
    pFirst: false,
    pSecond: false,
  });

  // used to switch between displays
  const [display, setDisplay] = useState({
    display1: "none",
    display2: "none",
  });

  // used to show password strength
  const [strength, setStrength] = useState("");

  // objects destructuring
  const { prevPassword, newPassword } = passCover;
  const { pFirst, pSecond } = Pchecker;
  const { display1, display2 } = display;

  // function to change the empty inputs
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPassCover({ ...passCover, [name]: value });
  };

  const checkOldPassword = () => {
    if (prevPassword.match(/[a-zA-Z]\S/) && prevPassword.length >= 4) {
      setPchecker({ ...Pchecker, pFirst: true });
      setDisplay({ ...display, display1: "block" });
      setStrength("weak");
    }
    if (prevPassword.match(/[a-zA-Z][0-9]\S/) && prevPassword.length > 7) {
      setPchecker({ ...Pchecker, pFirst: true });
      setDisplay({ ...display, display1: "block" });
      setStrength("strong");
    }
    if (prevPassword.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)) {
      setPchecker({ ...Pchecker, pFirst: false });
      setDisplay({ ...display, display1: "block" });
      setStrength("specialCharacter");
    }
    if (prevPassword.length < 4 || prevPassword.length > 15) {
      setPchecker({ ...Pchecker, pFirst: false });
      setDisplay({ ...display, display1: "block" });
      setStrength("invalid");
    }
  };

  const checkNewPassword = () => {
    if (newPassword.match(/[a-zA-Z]\S/) && newPassword.length >= 4) {
      setPchecker({ ...Pchecker, pSecond: true });
      setDisplay({ ...display, display2: "block" });
      setStrength("weak");
    }
    if (newPassword.match(/[a-zA-Z][0-9]\S/) && newPassword.length > 7) {
      setPchecker({ ...Pchecker, pSecond: true });
      setDisplay({ ...display, display2: "block" });
      setStrength("strong");
    }
    if (newPassword.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)) {
      setPchecker({ ...Pchecker, pSecond: false });
      setDisplay({ ...display, display2: "block" });
      setStrength("specialCharacter");
    }
    if (newPassword.length < 4 || newPassword.length > 15) {
      setPchecker({ ...Pchecker, pSecond: false });
      setDisplay({ ...display, display2: "block" });
      setStrength("invalid");
    }
  };

  // cursor isActive
  // cursor isActive
  const [cursorIsActive, setCursorIsActive] = useState(false);

  const changeSide = () => {
    setShowSide(!showSide);
  };

  const dispatch = useDispatch();
  const { isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );

  const log = () => {
    dispatch(logout());
    router.push("/");
    window.location.reload()
    // router.refresh();
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (isError) {
      toast?.error(message);
    } else if (isSuccess) {
      setUserName(user?.firstName);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const changePass = () => {
    if (pFirst && pSecond) {
      setCursorIsActive(true);
      dispatch(changePassword({ prevPassword, newPassword }));
      router.push("/");
    } else if (isError) {
      toast?.error(message);
    } else if (isSuccess) {
      window.location.reload()
      dispatch(reset());
    }
  };

  return (
    <div className="profile-cover">
      <div className="pside">
        <button onClick={changeSide}>
          <GiHamburgerMenu className="s-iconn" />
        </button>
        <button>
          <CgProfile className="s-icon" />{" "}
          <span className={showSide ? "" : "x"}>
            {userName === "" ? "" : userName}
          </span>
        </button>
        <button>
          <FaShoppingCart className="s-icon" />{" "}
          <span className={showSide ? "" : "x"}>Previous Orders</span>
        </button>
        <button onClick={() => setShowPass(!showPass)}>
          <FaUnlockAlt className="s-icon" />
          <span className={showSide ? "" : "x"}>Change Password</span>
        </button>
        <button onClick={log}>
          <SlLogout className="s-icon" />{" "}
          <span className={showSide ? "" : "x"}>Logout</span>
        </button>
      </div>
      {showPass ? (
        <></>
      ) : (
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ul
            className="studentRegForm-ul changePPP"
            style={{ height: "fit-content", minHeight: "fit-content" }}
          >
            <li
              className="tt pioneerRegForm-li"
              style={{ marginBottom: "12px" }}
            >
              <label
                htmlFor="password"
                style={{ color: "#473723", fontWeight: "700" }}
              >
                Old Password
              </label>
              <input
                type="password"
                name="prevPassword"
                placeholder="enter your previous password"
                value={prevPassword}
                onInput={onChange}
                onKeyUp={checkOldPassword}
              />
              <p
                className={pFirst ? "green" : "red"}
                style={{ display: display1 }}
              >
                {pFirst
                  ? strength === "weak"
                    ? "weak"
                    : strength === "strong"
                      ? "strong"
                      : "valid"
                  : strength === "specialCharacter"
                    ? "special characters not allowed"
                    : "invalid"}
              </p>
            </li>
            <li
              className="tt pioneerRegForm-li"
              style={{ marginBottom: "12px" }}
            >
              <label
                htmlFor="new password"
                style={{ color: "#473723", fontWeight: "700" }}
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="enter your new password"
                value={newPassword}
                onInput={onChange}
                onKeyUp={checkNewPassword}
              />
              <p
                className={pSecond ? "green" : "red"}
                style={{ display: display2 }}
              >
                {pSecond
                  ? strength === "weak"
                    ? "weak"
                    : strength === "strong"
                      ? "strong"
                      : "valid"
                  : strength === "specialCharacter"
                    ? "special characters not allowed"
                    : "invalid"}
              </p>
            </li>
            {/*  */}
            <div className="logBtnCover">
              <button
                type="button"
                className="log1"
                style={{
                  cursor: cursorIsActive ? "not-allowed" : "pointer",
                }}
                onClick={changePass}
              >
                Change Password
              </button>
            </div>
          </ul>
        </form>
      )}
    </div>
  );
};

export default page;
