import { useEffect, useState } from "react";

export default function Landing() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance by 100ms
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <>
      <div
        className={`min-h-screen lg:bg-[url('/home/background-home-desktop.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] bg-[url('/home/background-home-mobile.jpg')] bg-cover flex items-end`}
      >
        <div
          className={`
        mb-24 ml-40 
        transition-all duration-700 ease-in-out flex
        ${visible ? "opacity-100" : "opacity-0"}
      `}
        >
          <div className="text-white w-[380px]">
            <p className="font-barlow-condensed text-2xl text-white/70">
              SO YOU WANT TO TRAVEL TO
            </p>
            <p className="font-bellefair my-4 text-8xl">SPACE</p>
            <p className="font-barlow-condensed text-md text-white/70 leading-6">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>

          {/* Fixed group hover structure */}
          <div className="group absolute bottom-[120px] right-[310px]">
            {/* Main button */}
            <div className="w-52 h-52 rounded-full bg-white backdrop-blur-md flex items-center justify-center z-50 relative cursor-pointer">
              <p className="font-barlow-condensed text-2xl text-black">Explore</p>
            </div>
            
            {/* Hover effect background */}
            <div className="w-72 h-72 rounded-full bg-white opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 group-hover:opacity-20 backdrop-blur-md transition-opacity duration-300">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}