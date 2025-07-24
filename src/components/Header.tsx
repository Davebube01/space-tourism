import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.svg";

export default function Header() {
  const { pathname } = useLocation();
  function checkActive(path: string | null) {
    return pathname === path ;
  }
  return (
    <>
      <div className="min-h-10 absolute top-8 left-0 w-full z-50 flex ">
        <div className="w-full flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 ml-10"
          />
          <hr className="border border-white/30 w-[43%] absolute left-32 z-50 hidden lg:block"/>
        </div>
        <div className="bg-white/10 backdrop-blur-md flex justify-center items-center w-full">
            {route.map(({ path, title, num }) => (
              <Link
                key={path}
                to={path}
                className={`text-white px-4 py-6 text-sm hover:border-b-white border-2 border-transparent transition duration-500 ease-in-out flex ${checkActive(path) ? 'border-b-white' : ''}`}
              >
                {num && <span className="pr-4">{num}</span>}
                {title}
              </Link>
            ))}
            
        </div>
      </div>
    </>
  )
}

const route = [
   {
        path: "/",
        title: "HOME",
        num: "00"
    },
    {
        path: "/destination",
        title: "DESTINATION",
        num: "01"
    },
    {
        path: "crew",
        title: "CREW",
        num: "02"
    },
    {
        path: "technology",
        title: "TECHNOLOGY",
        num: "03"
    },
]