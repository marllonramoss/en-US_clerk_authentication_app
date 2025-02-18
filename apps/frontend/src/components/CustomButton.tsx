"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";

type CustomButtonProps = {
  nameOfUser: string;
  emailOfUser: string;
};

const CustomButton = ({ emailOfUser, nameOfUser }: CustomButtonProps) => {
  return (
    <button className=" w-fit p-2 flex gap-4 justify-center items-center ">
      <div className="flex justify-end items-end flex-col gap-1">
        <span>{nameOfUser}</span>
        <span>{emailOfUser}</span>
      </div>
      <UserButton />
    </button>
  );
};

export default CustomButton;
