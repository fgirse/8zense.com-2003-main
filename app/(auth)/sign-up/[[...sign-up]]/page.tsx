import { SignUp } from "@clerk/nextjs";
import { IncomingMessage } from "http";
import Image from "next/image";
import React from "react";
import Locked from"../../../../public/assets/images/locked.png"

export default function Page() {
  return (
    <>

    <div className="flex flex-col gap-y-12 items-center justify-center">
<Image src={Locked} alt="Illustration Schloss"/>
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-100">

       Hier erfolgt Ihre Anmeldung/ Registrierung...


      </h1>

      <SignUp />

    </div>

  </>
  );
}
