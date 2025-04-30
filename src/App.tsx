import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <header className="font-nunito h-dvh p-4 md:px-8 md:py-5 xl:px-12 relative w-full overflow-hidden before:bg-custom-purple_100 before:content-[''] before:absolute before:top-0 before:left-0 before:w-screen before:h-dvh before:rounded-b-[100%] before:scale-x-150">
        <div className="relative z-10 grid grid-rows-[auto,1fr] h-full">
          <NavBar />
          <HeroSection />
        </div>
      </header>
    </>
  );
};

export default App;
