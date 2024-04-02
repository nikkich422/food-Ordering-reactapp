import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [loginText, setLoginText] = useState("Login");
  const [mennuBtn, setMenuBtn] = useState(false);

  const online = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);

      // console.log(setMenuBtn);

      if (window.innerWidth > 768) {
        setMenuBtn(true);
      } else {
        setMenuBtn(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(cartItems);

  return (
    <div className="flex md:justify-between h-14 items-center bg-green-400 shadow-lg px-16 w-full justify-center">
      <div className="font-bold text-white mr-4 ">
        <img
          className=" m-2 p-2 mix-blend-color-burn h-20 w-20  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9zaYz1lglmx5Llnlq_Rs50qiC98LxdKiMg&s"
          alt="logo-img"
        />
      </div>
      <div className="absolute md:relative top-0 p-4 md:p-0 md:left-0 left-2 flex flex-col">
        <span
          className="md:hidden cursor-pointer"
          onClick={() => setMenuBtn(!mennuBtn)}
        >
          {mennuBtn ? <CloseIcon /> : <MenuSharpIcon />}
        </span>
        {mennuBtn && (
          <ul
            onBlur={() => setMenuBtn(false)}
            className=" md:flex justify-between items-center gap-10 text-white mt-4 md:mt-0 md:bg-transparent bg-red-500 p-2 px-8 md:p-0 rounded-xl bg-opacity-80"
          >
            <li onClick={() => setMenuBtn(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuBtn(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setMenuBtn(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={() => setMenuBtn(false)}>
              <Link to="/cart">Cart - ({cartItems.length})</Link>
            </li>
            {/* <li>
            <Link to="/grocery">Grocery</Link>
          </li> */}
            <button
              onClick={() =>
                loginText == "Login"
                  ? setLoginText("Logout")
                  : setLoginText("Login")
              }
              className="border-2 px-2 rounded-2xl bg-red-500 py-1 hidden md:inline-block"
            >
              {loginText}
            </button>
            {/* <div>
            {online ? <p>Online</p> : <p className="text-red-600">Offline</p>}
          </div> */}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
