import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/home" },
    { name: "Company", link: "/company" },
    { name: "Service", link: "/service" },
    { name: "Check Locations", link: "/locations" },
  ];

  return (
    <nav className="pl-10 flex justify-between shadow-lg tracking-wide">
      <div className="flex items-center">
        <img src="/images/kmp.jpg" alt="" className="w-[60px] h-[20px]" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-20">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative text-[#212121] hover:text-indigo-500 text-[14px]"
            >
              <a href={item.link} className="">
                {item.name}
              </a>
              <span className="relative bottom-[3px] left-0 w-full h-[2px] bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </div>
      <button className="text-white bg-[#212121] py-3 px-6">Login</button>
    </nav>
  );
};

export default Navbar;
