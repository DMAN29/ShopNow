import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HomeIcon from "@mui/icons-material/Home";
const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-xl w-full py-2 fixed z-10">
        <div className="flex md:w-11/12 lg:10/12 md:mx-auto mx-5">
          <div className="left-section flex w-full lg:w-2/3 ">
            <img
              src="../images/logo.png"
              alt=""
              className="mix-blend-multiply h-14 md:h-28 "
            />
            <div className="bg-slate-200 my-auto lg:text-lg rounded-xl mx-4 xl:mx-12 py-2 px-1 flex w-full ">
              <SearchIcon className="md:scale-125 md:m-2 my-auto" />
              <input
                type="text"
                className="search-bar h-8 bg-transparent outline-none  text-xs md:text-base xl:text-lg md:w-[400px] xl:w-[700px] my-auto mx-2"
                placeholder="Search By Products, Brands and More"
              />
            </div>
          </div>
          <div className="right-section hidden lg:flex ml-8 my-auto xl:text-xl w-1/3 justify-around ">
            <div className="account space-x-2 ">
              <AccountCircleIcon className="scale-125" />
              <select className="appearance-none outline-none px-2">
                <option value="Login">Login</option>
                <option value="MyProfile">My Profile</option>
                <option value="Orders">Orders</option>
                <option value="Logout">Logout</option>
              </select>
            </div>
            <div className="space-x-2 ">
              <ShoppingCartIcon className="scale-125" />
              <span className="hidden xl:inline">Cart</span>
            </div>
            <div className="space-x-2 ">
              <NotificationsIcon className="scale-125" />
              <span className="hidden xl:inline">Notification</span>
            </div>
          </div>
        </div>
        <div className="fixed grid grid-cols-4 bg-white text-center text-sm py-2  w-full lg:hidden  bottom-0 shadow-[rgba(0,_0,_0,_0.3)_0px_-5px_8px]">
          <a href="#">
            <HomeIcon />
            <p>Home</p>
          </a>
          <a href="#">
            <AccountCircleIcon />
            <p>Account</p>
          </a>
          <a href="#">
            <NotificationsIcon />
            <p>Notification</p>
          </a>
          <a href="#">
            <ShoppingCartIcon />
            <p>Cart</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
