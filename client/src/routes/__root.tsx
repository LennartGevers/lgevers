import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent(): React.ReactNode {
  return (
    <div className="absolute inset-0 min-h-screen h-full w-full flex flex-col items-center justify-between text-[#d4d4d4] font-sans">
      <Header />
      <TransformWrapper limitToBounds={false} minScale={0.5} maxScale={2}>
        <TransformComponent>
          <Outlet />
        </TransformComponent>
      </TransformWrapper>
      <Footer />
    </div>
  );
}
