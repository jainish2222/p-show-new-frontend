import React from "react";

interface SidebarProps {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="fixed z-10 h-screen w-full md:w-[200px] lg:w-[240px] bg-gray-600 shadow-lg p-4 md:p-8">
      <ul className="list-none flex flex-col items-center">
        {items.map((item) => (
          <li
            key={item}
            className={`my-2 md:my-4 cursor-pointer text-xs md:text-base uppercase ${
              activeItem === item ? "font-bold text-black" : "text-indigo-700"
            }`}
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
