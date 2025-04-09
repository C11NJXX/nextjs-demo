import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>This is layout</p>
      {children}
    </div>
  );
};

export default Layout;
