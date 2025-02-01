
"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  Modal,
  Button,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

import { BeakerIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const LogoArialog = () => {
  return (
    <svg width="30" height="32" viewBox="0 0 30 32" className="fill-current" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 31.9927L10.6097 31.9927L25.2259 10.4645L19.1629 24.7986L27.6151 23.8672L29.7515 0L0 31.9927ZM27.154 29.0179L16.9687 29.9862L16.12 31.9927L26.8878 31.9927L27.154 29.0179Z" fill="" />
      <path d="M9.75684 32H26.8437L27.4504 27.6019L10.6668 30.2812L9.75684 32Z" fill="" />
    </svg>
  );
}

const NavbarComponent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "About Me",
      href: "/",
    },
    {
      label: "Project",
      href: "/project",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="fixed sm:static bottom-0 w-full z-50">
      <Navbar maxWidth="xl" className="bg-white/0 dark:bg-[#111]/50" isBlurred={true}>
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <LogoArialog />
            <p className="text-lg font-bold">ARIALOG.</p>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          {menuItems.map((item, index) => {
            return (
              <NavbarItem className="hidden sm:block" key={index}>
                <Link className={`${pathname == item.href ? 'font-medium shadow-xl shadow-gray-400 border-gray-500 dark:border-gray bg-gradient-to-tr from-gray-100 to-gray-500 dark:from-gray-500 dark:to-gray-1000 text-foreground duration-300' : 'text-gray-1000 hover:text-foreground border-transparent duration-300'} border rounded-lg py-2 px-3 duration-300`} href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            )
          })}
          <ThemeSwitcher />
          <button
            onClick={onOpen}
            className="sm:hidden"
          >
            <div className={`transition-transform duration-300 transform ${isOpen ? "rotate-90" : ""}`}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </div>
          </button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="w-full">
              {(
                <>
                  <ModalHeader className="flex gap-2 items-center">
                    <LogoArialog />
                    <p className="text-lg font-bold">ARIALOG.</p>
                  </ModalHeader>
                  <ModalBody>
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        className={`${pathname == item.href ?
                          'font-medium shadow-xl shadow-gray-400 border-gray-500 dark:border-gray bg-gradient-to-tr from-gray-100 to-gray-500 dark:from-gray-500 dark:to-gray-1000 text-foreground duration-300' :
                          'text-gray-1000 hover:text-foreground border-transparent duration-300'} border rounded-lg py-2 px-3 duration-300`}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarContent>

        <NavbarMenu className="bg-white/0 dark:bg-[#111]/50 h-fit">
          {menuItems.map((item, index) => (
            <a
              key={index}
              className={`${pathname == item.href ?
                'font-medium shadow-xl shadow-gray-400 border-gray-500 dark:border-gray bg-gradient-to-tr from-gray-100 to-gray-500 dark:from-gray-500 dark:to-gray-1000 text-foreground duration-300' :
                'text-gray-1000 hover:text-foreground border-transparent duration-300'} border rounded-lg py-2 px-3 duration-300`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </NavbarMenu>
      </Navbar >
    </div>
  )
}

export default NavbarComponent