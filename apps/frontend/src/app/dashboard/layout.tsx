import DashboardLayout from "@/components/templates/DashboardLayout";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
