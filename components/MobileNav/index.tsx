"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

function MobileNav() {
  const pathname = usePathname();
  const isPeriodData = pathname === "/perioddetail";

  return (
    <section className={`bottombar fixed ${isPeriodData ? "" : "md:hidden"}`}>
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={isActive ? link.imgURLActive : link.imgURL}
                alt={link.label}
                width={16}
                height={16}
                className="object-contain"
              />

              <p
                className={`${
                  isActive ? "text-slate-50" : "text-[#737791]"
                } max-sm:hidden text-subtle-medium`}
              >
                {link.label.split(" ")[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
    // <h1>Hello</h1>
  );
}

export default MobileNav;
