import type { NextPage } from "next";
import React from "react";
import dashboard from "../../pages/dashboard";
import Products from "./products";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Products></Products>
    </div>
  );
}

Dashboard.PageLayout = dashboard;

export default Dashboard;
