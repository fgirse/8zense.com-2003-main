import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MenubarItems from "./MenubarItem";
import Locked from "@/public/assets/images/locked.png";
import Logo from "@/public/assets/images/LogoEZ990.svg";
import { PropsWithChildren } from "react";
//import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex flex-col w-full lg:h-20 text-white items-center justify-between bg-transparent">
      <div
        id=""
        className="bg-neutral-600 w-[100vw] h-20 flex flex-row items-center justify-between "
      >
        <Link href="/" className="ml-5">
          <div className=" md:flex flex-row justify-center items-center gap-x-7">
            <div className="relative w-20 h-16 hover:bg-slate-500 hover:translate-y-2 hover:translate-x-2">
              <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com" />
            </div>
            <h1 className="hidden md:hover:translate-y-2 md:scale-125 md:hover:translate-x-2  md:mr-6 md:hover:text-zenseCreme md:block md:text-lg xl:text-xl text-slate-400">
              8zenSe.com
            </h1>
          </div>
        </Link>

        <SignedIn>
          <nav className="lg:flex lg:flex-row lg:items-baseline lg:max-w-6xl">
            <MenubarItems />
          </nav>
          <div className="w-full mr-6 flex flex-row justify-between items-center gap-x-5 ">
            <div className="hidden relative w-20 h-16 ">
              <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com" />
            </div>
            <UserButton afterSignOutUrl="/" />
            <div className="text-5xl lg:hidden"></div>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="w-full flex flex-row justify-end items-baseline gap-x-3">
            <div className="w-12 h-12 lg:w-8 lg:h-8">
              <Image
                src={Locked}
                alt="Schloss"
                sizes="100vw"
                className="relative rounded-full border-0 -8 border-gray-300"
              />
            </div>

            <Button
              asChild
              className="mr-9 rounded-xl font-bold text-3xl text-amber-500 bg-[#fcf601] hover:bg-amber-400 hover:border-2 hover:border-[#fcf601]"
              size="lg"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
