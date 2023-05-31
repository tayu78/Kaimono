"use client";
import { useState } from "react";
import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Search from "./Search";

const iconStyle = {
  color: "gray",
  fontSize: 35,
  cursor: "pointer",
};
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="flex  items-center justify-between px-5 py-2 md:px-10">
      <div className="relative h-[100px] w-[100px]">
        <Image src="/logo.svg" fill content="contain" alt="logo" />
      </div>
      <div className=" hidden  lg:flex lg:w-[50%] xl:w-[70%] xl:max-w-[900px]">
        <div className="h-[60px] cursor-pointer rounded-l-lg bg-slate-100 p-5 pr-0">
          <SearchOutlinedIcon />
        </div>
        <input placeholder="Search" className="search-input" type="text" />
      </div>

      <div className="items center flex gap-2">
        <div className="lg:hidden" onClick={() => setIsSearchOpen(true)}>
          <SearchOutlinedIcon sx={iconStyle} />
        </div>
        <ShoppingCartOutlinedIcon sx={iconStyle} />
        <AccountCircleOutlinedIcon sx={iconStyle} />
      </div>
      {isSearchOpen && <Search setIsOpen={setIsSearchOpen} />}
    </header>
  );
};

export default Header;
