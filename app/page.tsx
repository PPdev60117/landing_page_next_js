import Advertise from "./components/Advertise/Advertise";
import Client from "./components/Client/Client";
import Header from "./components/Header/Header";
import Owner from "./components/Owner/Owner";
import Service from "./components/Service/Service";
import Solution from "./components/Solution/Solution";

export default function Home() {

  return (
    <>
      <Header/>
      <Advertise/>
      <Owner/>
      <Service/>
      <Solution/>
      <Client/>
    </>
  );
}
