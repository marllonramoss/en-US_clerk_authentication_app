import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import CustomButton from "../CustomButton";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const authData = await currentUser();

  return (
    <div className=" ">
      <header className=" flex w-screen h-16 gap-10 justify-between px-10 border-b-[1px] border-zinc-500">
        <nav className=" flex items-center">
          <ul className="flex gap-2 items-center ">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </nav>
        <SignedIn>
          <CustomButton
            nameOfUser={authData?.firstName!}
            emailOfUser={authData?.emailAddresses[0].emailAddress!}
          />
        </SignedIn>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
