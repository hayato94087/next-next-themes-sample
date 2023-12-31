import { ThemeToggle } from "@/components/theme-toggle";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Home;
