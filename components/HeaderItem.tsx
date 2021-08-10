import React, { FC } from "react";

type HeaderType = {
  title: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const HeaderItem: FC<HeaderType> = ({ title, Icon }) => {
  return (
    <div>
      <Icon className="h-8 mb-1" />
      <p className="tracking-widest">{title}</p>
    </div>
  );
};

export default HeaderItem;
