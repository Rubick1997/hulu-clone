import React, { FC } from "react";
import { headerItems } from "../data";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header: FC = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <Image
        className="object-contain"
        src="/logo.png"
        alt="Hulu Logo"
        width={200}
        height={100}
      />
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map(({ title, icon }) => (
          <HeaderItem key={title} title={title} Icon={icon} />
        ))}
      </div>
    </header>
  );
};

export default Header;
