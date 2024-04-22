import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="py-4 shadow-2 bg-primary">
      <div className="flex justify-between items-center container mx-auto">
        <Image src="/logo.png" alt="logo" width={150} height={100} />
        <div className="flex items-center gap-4">
          <FiSearch size={20} />
          <IoMenu size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
