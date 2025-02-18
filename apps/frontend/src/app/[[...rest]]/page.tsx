import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="border border-zinc-50 w-fit px-4 py-2">
        <Link href={"dashboard"}>GO TO APP</Link>
      </button>
    </div>
  );
};

export default Home;
