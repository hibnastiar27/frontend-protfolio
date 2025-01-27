
"use client";

import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
} from "@heroui/react";
import { Switch } from "@heroui/switch";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
});

const LogoArialog = () => {
    return (
        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 31.9927L10.6097 31.9927L25.2259 10.4645L19.1629 24.7986L27.6151 23.8672L29.7515 0L0 31.9927ZM27.154 29.0179L16.9687 29.9862L16.12 31.9927L26.8878 31.9927L27.154 29.0179Z" fill="#3D63DD" />
            <path d="M9.75684 32H26.8437L27.4504 27.6019L10.6668 30.2812L9.75684 32Z" fill="#3D63DD" />
        </svg>
    );
}

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            label: "About Me",
            href: "/",
        },
        {
            label: "Project",
            href: "/project",
        },
        {
            label: "Blog",
            href: "/blog",
        }
    ];

    const pathname = usePathname();
    return (
        <Navbar maxWidth="xl" >
            <NavbarBrand>
                <Link href="/" className="flex items-center gap-2">
                    <LogoArialog />
                    <p className="text-lg font-bold text-primary">ARIALOG.</p>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end" >
                {menuItems.map((item, index) => {
                    return (
                        <NavbarItem key={index}>
                            <Link className={`${pathname == item.href ? 'text-primary font-medium' : ''} p-4`} href={item.href}>
                                {item.label}
                            </Link>
                        </NavbarItem>
                    )
                })}

                {/* DarkMode */}
                <Switch
                    color="primary"
                    size="md"
                />

                {/* <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} /> */}
            </NavbarContent>
        </Navbar >
    )
}

export default NavbarComponent