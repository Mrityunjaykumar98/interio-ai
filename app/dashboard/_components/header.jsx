"use client";
import { UserDetailContext } from "@/app/_context/userDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useContext } from "react";

export const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        <h2 className="font-bold text-lg">Interio AI</h2>
      </div>

      <Button variant="ghost" className="rounded-full text-primary">
        Buy More Credits
      </Button>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src={"/star.png"} width={20} height={20} alt="star logo" />
          <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
};
