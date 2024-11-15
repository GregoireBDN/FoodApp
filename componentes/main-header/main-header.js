"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLike from "./nav-like";
const MainHeader = () => {
  const pathname = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLike href="/meals">Browse Meals</NavLike>
            </li>
            <li>
              <NavLike href="/community">Foodies Community</NavLike>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
