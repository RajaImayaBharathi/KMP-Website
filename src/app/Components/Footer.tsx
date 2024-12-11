import React from "react";

/* Social Media Icons Import */
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
  const menuItems = [
    { name: "Home", link: "/home" },
    { name: "Company", link: "/company" },
    { name: "Service", link: "/service" },
    { name: "Check Locations", link: "/locations" },
    { name: "Contact", link: "/locations" },
    { name: "Privacy Policy", link: "/locations" },
  ];

  const footerContact = [
    { key: "Address", value: "codissia fair trade gound opp, peelamedu, coimbaore" },
    { key: "Mail", value: "support@kmpspeedparcelservice.in" },
    { key: "Telephone", value: "0433 8452 2788" },
    { key: "Whatsapp", value: "(+91) 7804555215" },
    { key: "facebook", value: "kmpspeedparcelservice.facebook" },
  ];

  return (
    <footer className="bg-zinc-900 text-white p-4 tracking-wide font-manrope">
      <section className="flex justify-between my-14 px-5">
        {/* Left side for the logo */}
        <div className="flex items-center w-1/3 h-[200px]">
          <img src="/images/kmp.jpg" alt="KMP" className="w-full h-[200px]" />{" "}
          {/* You can adjust this if you want a specific width */}
        </div>

        {/* Right side for the contact information */}
        <div className="w-1/3">
          <ul className="space-y-5 m-auto">
            {footerContact.map((item, index) => (
              <li className="flex justify-between text-white hover:text-gray-400 text-[12px] border-b border-zinc-500 pb-2" key={index}>
                <p className="">
                  {item.key}
                </p>
                <p className="">
                  {item.value}
                </p>
              </li>
              
            ))}
          </ul>
        </div>
      </section>


      <section className="my-8">
        <div className="w-[98%] m-auto h-[0.5px] bg-white rounded-full my-8"></div>
        <div className="flex">
          <ul className="flex space-x-10 m-auto">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white hover:text-indigo-500 text-[14px]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[98%] m-auto h-[1px] bg-white rounded-full my-8"></div>
      </section>

      <section className="flex justify-between items-center px-5">
        {/* Left Side Corner */}
        <p className="text-[11px] font-manrope select-none">
          All rights reserved @ 2024
        </p>
        {/* Center */}
        <p className="text-[11px] font-manrope ">
          Managed By{" "}
          <a
            href="https://metaphorhub.com/"
            target="_blank"
            className="text-red-500"
          >
            Metaphor Hub
          </a>
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-2">
          <FaWhatsapp className="select-cursor" />
          <RiFacebookCircleLine />
          <FaInstagram />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
