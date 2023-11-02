"use client";
import React, { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import Link from "next/link";
import { tabs } from "@/utils";

interface Tab {
  label: string;
  href: string;
}

function NavnarMenuDesktop() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (index: number): void => {
    setSelectedIndex(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="hidden md:flex items-center ">
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {tabs.map((tab: Tab, index: number) => (
          <Link href={tab.href} key={tab.label}>
            <button
              onClick={() => handleItemClick(index)}
              style={{
                padding: "0.65rem 0.75rem",

                border: 0,
                cursor: "pointer",
              }}
            >
              {tab.label}
              {selectedIndex === index && (
                <div style={{ position: "relative", transform: "translateY(3px)" }}>
                  <MagicTabSelect id="underline" transition={{ type: "spring", bounce: 0.3 }}>
                    <div
                      style={{
                        width: "100%",
                        height: "0.15rem",
                        backgroundColor: "black",
                        position: "absolute",
                      }}
                    />
                  </MagicTabSelect>
                </div>
              )}
            </button>
          </Link>
        ))}

        <div className="relative inline-block">
          <button
            id="dropdownHoverButton"
            className="  rounded-lg px-4 py-2 pt-[10.5px] ml-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Consultas
          </button>
          {isDropdownOpen && (
            <div
              id="dropdownHover"
              className={`z-10 ${
                isDropdownOpen ? "block" : "hidden"
              } transition duration-300 ease-in-out transform origin-top absolute top-10 left-0 w-44  bg-white divide-y divide-gray-100 rounded-lg shadow `}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                <li className="w-full hover:bg-gray-100 h-full">
                  <a href="/contacto" className="block px-4 py-2 w-full hover:bg-gray-100  ">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="block px-4 py-2 w-full hover:bg-gray-100  ">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="block px-4 py-2 w-full hover:bg-gray-100  ">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavnarMenuDesktop;
