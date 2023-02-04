"use client";
import { Container } from "@mantine/core";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className=''>
      <Container size={"md"} className='space-x-4' py={"lg"}>
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blog</Link>
      </Container>
    </div>
  );
}

export default NavBar;
