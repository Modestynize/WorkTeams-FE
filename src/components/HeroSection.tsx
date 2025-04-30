import { Button } from "../components/ui/button";
import HeroImg from '../assets/HeroImg.png';


const HeroSection = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 self-center">
      <img src={HeroImg} className="object-cover md:order-2" alt="Hero Image" />
      <section className="text-center flex flex-col justify-center items-center md:items-start md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[50px] xl:leading-tight font-extrabold mb-2 text-custom-purple_400">Turning <span className="text-custom-orange_400">‘me’</span> goals into <span className="text-custom-orange_400">‘we’</span> achievements</h1>
        <p className="text-sm md:text-xl lg:text-2xl xl:w-[500px] text-custom-gray_300 font-normal leading-normal">
          Boost productivity and peace of mind with WorkTeams – the ultimate
          task manager and to-do list app.
        </p>
        <Button className="mt-4 py-5 w-1/2 md:w-[320px] h-[50px]">Join for free</Button>
      </section>
    </div>
  );
};

export default HeroSection;
