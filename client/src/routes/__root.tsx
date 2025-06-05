import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent(): React.ReactNode {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
