import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import Locked from"../../../../public/assets/images/locked.png";

export default function Page() {
  return (
    <>

    <div className="bg-stone-700 py-7 flex flex-col gap-y-3 items-center justify-center">
      <div className="flex flex-col justify-center items-center">
      <div className="w-40 flex flex-col items-center">
      <Image className="w-28" src={Locked} alt="Illustration Schloss"/>
      </div>
        <p className="w-4/5 border rounded-2xl  mt-6 px-5 mb-2 text-xl text-center text-slate-200">Dieser Inhalt ist nur nach Anmeldung bzw. Registrierung zugänglich!</p>
        <h1 className="mb-12 text-3xl md:text-xl lg:text-[0.66rem] text-center text-zenseSignal2">Melden Sie sich bitte an!</h1>
    <div></div>
      <SignIn />
    </div>
</div>
  </>
  );
}
