import Advertise from "./components/Advertise/Advertise";
import Client from "./components/Client/Client";
import Header from "./components/Header/Header";
import Owner from "./components/Owner/Owner";
import Service from "./components/Service/Service";
import Solution from "./components/Solution/Solution";

export default function Home() {

  return (
    <>
      <div className="face-fade w-screen h-screen z-[999999] fixed bg-white top-0 left-0">
        <div className="w-full h-full flex">
          <div className="m-auto">
          <div className="w-20 h-20 relative">
        <div className="logo-fade-r h-full absolute w-2 bg-[#2C4546] left-0"></div>
        <div className="logo-fade-l w-full absolute h-2 bg-[#2C4546] left-0"></div>
        <div className="logo-fade-r h-full absolute w-2 bg-[#2C4546] right-0"></div>
        <div className="logo-fade-l w-full absolute h-2 bg-[#2C4546] bottom-0"></div>
        <div className="logo-fade w-[70%] -rotate-45 absolute h-2 bg-[#2C4546] right-[30px] -top-5"></div>
        <div className="logo-fade w-[70%] rotate-45 absolute h-2 bg-[#2C4546] left-[30px] -top-5"></div>
      </div>
          </div>
        </div>
      </div>
      <Header/>
      <Advertise/>
      <Owner/>
      <Service/>
      <Solution/>
      <Client/>
    </>
  );
}
