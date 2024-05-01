import {

  Sheet,

  SheetContent,

  SheetDescription,

  SheetHeader,

  SheetTitle,

  SheetTrigger,

} from "@/components/ui/sheet"

import Image from "next/image"

import { Separator } from "../ui/separator";

import NavItems from "./NavItems"
import { StaggerTestimonials } from "./Testimonial";
import DropDown from "@/components/share/StaggereDropDown";





const MobileNav = () => {

  return (
<>
    <nav className="md:hidden">

      <Sheet>

        <SheetTrigger className="align-middle text-red-500">

          <Image 

            src="/assets/icons/menu.svg"

            alt="menu"

            width={24}

            height={24}

            className="cursor-pointer"

          />

        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-red-900 md:hidden">

        <div className="relative h-24 w-24">
          <Image
            className="max-w-full" 
            src="/assets/images/LogoEZ990.svg"
            alt="logo"
            sizes="100vw"
            fill
          />
        </div>

          <Separator className="mt-16 border border-orange-300" />

          <NavItems />
          <div className="w-96 h-36 text-white text-3xl">
        
        </div>  

        </SheetContent>

      </Sheet>

    </nav>
  
    </>
  )

}



export default MobileNav