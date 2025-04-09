import { redirect } from "next/navigation";
const Orange = () => {
  redirect("/");
  return <div>You can't see me</div>;
};

export default Orange;
