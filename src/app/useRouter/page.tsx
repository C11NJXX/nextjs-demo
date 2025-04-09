"use client";
import { useRouter } from "next/navigation";
const UseRouter = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>Go to DashBoard</button>
    </div>
  );
};

export default UseRouter;
