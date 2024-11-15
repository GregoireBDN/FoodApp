"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-like.module.css";

const NavLike = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? classes.active : ""}
    >
      {children}
    </Link>
  );
};

export default NavLike;
