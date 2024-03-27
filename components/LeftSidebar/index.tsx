"use client";

import { sidebarLinks } from "@/constants";
import { LinkModel } from "@/models/common";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// import { User } from "@/models/User";
// import { getUserProfile } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";
const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isPeriodPageAndReservation =
    pathname === "/perioddetail" || pathname === "/reservationforecast";
  // console.log("perioddetail", isPeriodPageAndReservation);
  //   const { userId } = useAuth();
  //   const { organization } = useOrganization();
  // console.log(process.env.TEST);
  return (
    <section
      className={`custom-scrollbar ${
        isPeriodPageAndReservation ? "hidden" : "sticky"
      } max-lg:hidden leftsidebar`}
    >
      <div className="lg:flex hidden flex-row mx-auto items-center gap-4 mb-10">
        <div className="p-3 bg-primary-500 rounded-sm">
          <svg
            height={26}
            width={26}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" />
          </svg>
        </div>

        <h1 className="lg:text-heading3-bold 2xl:text-heading3-bold text-heading4-medium text-white">
          Demo Hotel
        </h1>
      </div>
      <div className="flex w-full flex-1 flex-col gap-6 px-8">
        {sidebarLinks.map((link: LinkModel, item) => {
          //   const isActive =
          //     (pathname.includes(link.route) && link.route.length > 1) ||
          //     pathname === link.route;
          let isActive: boolean;
          isActive = pathname.includes(link.route);
          if (link.route === "/actualdata" && pathname === "/") {
            isActive = true;
          }
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link lg:flex-row flex-col items-center ${
                isActive && "bg-primary-500 "
              }`}
            >
              <Image
                src={isActive ? link.imgURLActive : link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p
                className={`${
                  isActive ? "text-slate-50" : "text-[#737791]"
                } hidden lg:block`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/images/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />

              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
