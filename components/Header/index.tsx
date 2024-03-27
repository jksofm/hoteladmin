"use client";
import Image from "next/image";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Header({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center border-[0.4px] solid px-12 py-6 shadow-lg rounded-md">
      <h2 className="sm:text-heading3-bold text-base-bold text-slate-500">
        {title}
      </h2>

      <div className="flex items-center gap-3">
        {/* <Image
          width={60}
          height={60}
          alt="Profile Image"
          className="rounded-lg"
          src="/assets/images/user.jpg"

        /> */}
        <p className="text-base-regular text-slate-500 hidden md:block">
          Account
        </p>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
