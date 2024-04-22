import { HeaderData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const HeaderCard = () => {
  return (
    <div className="flex justify-between items-center gap-4 ">
      <button className="rotate-90 rounded-full bg-button p-2 border hidden sm:block">
        <IoMdArrowDropdown />
      </button>
      <div className="hidden sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 ">
          {HeaderData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-3 shadow rounded-xl "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-sm text-gray-500">{item.title}</h1>
                <p className="font-semibold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden block w-full">
        <div className="flex items-center gap-4 p-3 shadow rounded-xl  ">
          <Image
            src={HeaderData[0].image}
            alt={HeaderData[0].title}
            width={80}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-gray-500">{HeaderData[0].title}</h1>
            <p className="font-semibold">{HeaderData[0].desc}</p>
          </div>
        </div>
      </div>

      <button className="rotate-90 rounded-full bg-button p-2 border hidden sm:block">
        <IoMdArrowDropup />
      </button>
    </div>
  );
};

export default HeaderCard;
