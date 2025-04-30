import { Button } from "../components/ui/button";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const navList = ["Home", "Team", "Our Features"];

  return (
    <div className="flex justify-between self-start items-center font-poppins">
      <div className="relative">
        <div className="w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] rounded-full bg-custom-purple_400"></div>
        <h2 className="absolute top-2 xl:top-3.5 left-3 text-xl xl:text-3xl font-bold text-custom-orange_400">
          WorkTeams
        </h2>
      </div>
      <ul className="hidden md:flex md:gap-12 xl:gap-28 md:text-base md:ml-[100px] xl:ml-[150px] md:text-custom-blue_400">
        {navList.map((item) => (
          <li className="cursor-pointer hover:underline hover:decoration-4 hover:decoration-custom-orange_400" key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <Button className="hidden md:block xl:w-[232px] xl:h-[50px]">
          Get Started
        </Button>
        <CiMenuFries className="md:hidden text-lg" />
      </div>
    </div>
  );
};

export default NavBar;
