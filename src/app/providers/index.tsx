import { Menu } from "@/widgets";
import { Outlet } from "react-router-dom";

export const Providers = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Menu />
    </>
  );
};
