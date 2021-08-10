import React, { FC } from "react";
import { HomeIcon } from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const headerItems = [
  { title: "HOME", icon: HomeIcon },
  { title: "HOME", icon: HomeIcon },
  { title: "HOME", icon: HomeIcon },
];

const Header: FC = () => {
  return (
    <header>
      <div>
        {headerItems.map(({ title, icon }) => (
          <HeaderItem key={title} title={title} Icon={icon} />
        ))}
      </div>
      <Image src="/logo.png" alt="Hulu Logo" width={200} height={100} />
    </header>
  );
};

export default Header;
