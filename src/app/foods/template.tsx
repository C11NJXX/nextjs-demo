import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>This is Template</p>
      {children}
    </div>
  );
};

export default Template;
